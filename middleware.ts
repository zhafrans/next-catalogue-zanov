import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from './lib/auth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('session')?.value;
    
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    const session = await decrypt(token);
    
    if (!session || session.role !== 'admin') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Redirect logged in users from login page
  if (pathname === '/login') {
    const token = request.cookies.get('session')?.value;
    
    if (token) {
      const session = await decrypt(token);
      if (session && session.role === 'admin') {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};
