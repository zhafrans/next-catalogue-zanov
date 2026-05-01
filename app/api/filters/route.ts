import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { productsTable } from '@/src/db/schema';

export async function GET() {
  try {
    const gendersResult = await db
      .select({ gender: productsTable.gender })
      .from(productsTable)
      .groupBy(productsTable.gender);

    const categoriesResult = await db
      .select({ category: productsTable.category })
      .from(productsTable)
      .groupBy(productsTable.category);

    const materialsResult = await db
      .select({ material: productsTable.material })
      .from(productsTable)
      .groupBy(productsTable.material);

    const genderLabels: Record<string, string> = {
      men: 'Pria',
      women: 'Wanita',
      unisex: 'Unisex'
    };

    const categoryLabels: Record<string, string> = {
      formal: 'Formal',
      casual: 'Casual',
      boots: 'Boots'
    };

    const materialLabels: Record<string, string> = {
      leather: 'Kulit Premium',
      suede: 'Suede',
      canvas: 'Canvas',
      synthetic: 'Sintetis'
    };

    const genders = [
      { value: 'all', label: 'Semua' },
      ...gendersResult.map(g => ({
        value: g.gender,
        label: genderLabels[g.gender] || g.gender
      }))
    ];

    const categories = [
      { value: 'all', label: 'Semua Kategori' },
      ...categoriesResult.map(c => ({
        value: c.category,
        label: categoryLabels[c.category] || c.category
      }))
    ];

    const materials = [
      { value: 'all', label: 'Semua Bahan' },
      ...materialsResult.map(m => ({
        value: m.material,
        label: materialLabels[m.material] || m.material
      }))
    ];

    return NextResponse.json({ genders, categories, materials });
  } catch (error) {
    console.error('Error fetching filters:', error);
    return NextResponse.json(
      { error: 'Failed to fetch filters' },
      { status: 500 }
    );
  }
}
