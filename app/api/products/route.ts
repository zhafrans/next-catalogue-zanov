import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { productsTable } from '@/src/db/schema';
import { like, and, eq, or } from 'drizzle-orm';
import { getSessionFromRequest } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search') || '';
    const gender = searchParams.get('gender') || 'all';
    const category = searchParams.get('category') || 'all';
    const material = searchParams.get('material') || 'all';

    const conditions = [];

    if (search) {
      conditions.push(
        or(
          like(productsTable.name, `%${search}%`),
          like(productsTable.category, `%${search}%`)
        )
      );
    }

    if (gender !== 'all') {
      conditions.push(eq(productsTable.gender, gender));
    }

    if (category !== 'all') {
      conditions.push(eq(productsTable.category, category));
    }

    if (material !== 'all') {
      conditions.push(eq(productsTable.material, material));
    }

    const query = conditions.length > 0
      ? db.select().from(productsTable).where(and(...conditions))
      : db.select().from(productsTable);

    const products = await query;

    const formattedProducts = products.map(product => ({
      id: product.id,
      name: product.name,
      slug: product.name.toLowerCase().replace(/\s+/g, '-'),
      gender: product.gender,
      category: product.category,
      material: product.material,
      price: product.cashPrice,
      creditPrice: product.creditPrice,
      image: product.image || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=1200&fit=crop',
      rating: 4.5,
      stock: 10,
    }));

    return NextResponse.json({ products: formattedProducts });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST - Create new product (admin only)
export async function POST(request: NextRequest) {
  try {
    const session = await getSessionFromRequest(request);
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, category, gender, material, cashPrice, creditPrice, image } = body;

    if (!name || !category || !gender || !material || !cashPrice || !creditPrice) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi' },
        { status: 400 }
      );
    }

    const result = await db.insert(productsTable).values({
      name,
      category,
      gender,
      material,
      cashPrice: parseInt(cashPrice),
      creditPrice: parseInt(creditPrice),
      image: image || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=1200&fit=crop',
    });

    return NextResponse.json({ success: true, id: Number(result[0].insertId) });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
