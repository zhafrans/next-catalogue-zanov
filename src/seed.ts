import { userSeeder } from './seeder/userSeeder';

export async function seed() {
  await userSeeder();
}

seed();
