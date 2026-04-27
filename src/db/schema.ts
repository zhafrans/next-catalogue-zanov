import { int, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const usersTable = mysqlTable('users', {
  id: serial().primaryKey(),
  email: varchar({ length: 255 }).notNull().unique(),
  role: varchar({ length: 50 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
});

export const productsTable = mysqlTable('products', {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  category: varchar({ length: 100 }).notNull(),
  gender: varchar({ length: 20 }).notNull(),
  material: varchar({ length: 100 }).notNull(),
  cashPrice: int().notNull(),
  creditPrice: int().notNull(),
  image: varchar({ length: 255 }).notNull(),
});
