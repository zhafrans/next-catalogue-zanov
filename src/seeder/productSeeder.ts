import 'dotenv/config';
import mysql from 'mysql2/promise';
import { drizzle } from "drizzle-orm/mysql2";
import { productsTable } from '../db/schema';

const genders = ['Male', 'Female', 'Unisex'];
const materials = ['Leather', 'Canvas', 'Synthetic', 'Mesh', 'Rubber', 'Suede'];

const shoeModels = [
  'Running', 'Basketball', 'Sneakers', 'Loafers', 'Boots', 'Sandals',
  'Training', 'Walking', 'Casual', 'Formal', 'Sport', 'Outdoor',
  'Slip-on', 'High-top', 'Low-top', 'Athletic', 'Classic', 'Modern',
  'Urban', 'Street', 'Performance', 'Comfort', 'Lightweight', 'Durable',
  'Waterproof', 'Breathable', 'Cushioned', 'Flexible', 'Stylish',
  'Premium', 'Essential', 'Original', 'Limited', 'Pro', 'Elite',
  'Series', 'Collection', 'Edition', 'Style', 'Design', 'Model',
  'Version', 'Type', 'Variant', 'Line', 'Range', 'Selection'
];

export async function productSeeder() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL!);
  const db = drizzle(connection);

  const products = Array.from({ length: 50 }, (_, i) => ({
    name: `ZANOV ${shoeModels[i] || 'Shoes'}`,
    category: 'Shoes',
    gender: genders[Math.floor(Math.random() * genders.length)],
    material: materials[Math.floor(Math.random() * materials.length)],
    cashPrice: Math.floor(Math.random() * 500000) + 100000,
    creditPrice: Math.floor(Math.random() * 550000) + 150000,
    image: null,
  }));

  await db.insert(productsTable).values(products);

  console.log('50 ZANOV shoes seeded successfully!');
  await connection.end();
}
