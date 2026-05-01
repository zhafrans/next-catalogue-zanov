import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { productsTable } from '@/src/db/schema';
import { eq } from 'drizzle-orm';
import { getSessionFromRequest } from '@/lib/auth';

// PUT - Update product (admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSessionFromRequest(request);
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { name, category, gender, material, cashPrice, creditPrice, image } = body;

    if (!name || !category || !gender || !material || !cashPrice || !creditPrice) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi' },
        { status: 400 }
      );
    }

    await db.update(productsTable).set({
      name,
      category,
      gender,
      material,
      cashPrice: parseInt(cashPrice),
      creditPrice: parseInt(creditPrice),
      image: image || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=1200&fit=crop',
    }).where(eq(productsTable.id, parseInt(id)));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    );
  }
}

// DELETE - Delete product (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSessionFromRequest(request);
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    await db.delete(productsTable).where(eq(productsTable.id, parseInt(id)));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    );
  }
}
