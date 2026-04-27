import 'dotenv/config';
import mysql from 'mysql2/promise';
import { drizzle } from "drizzle-orm/mysql2";
import { usersTable } from '../db/schema';

export async function userSeeder() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL!);
  const db = drizzle(connection);

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
  await connection.end();
}