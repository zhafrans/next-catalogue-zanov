import 'dotenv/config';
import { drizzle } from "drizzle-orm/mysql2";
import { usersTable } from '../db/schema';

const db = drizzle(process.env.DATABASE_URL!);

export async function userSeeder() {
  await db.insert(usersTable).values({
    email: 'admin@zanov.co.id',
    role: 'admin',
    password: 'password',
  }).onDuplicateKeyUpdate({
    set: {
      role: 'admin',
      password: 'password',
    },
  });
  console.log('Admin user seeded successfully!');
}