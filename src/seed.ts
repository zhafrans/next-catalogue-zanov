import { userSeeder } from './seeder/userSeeder';
import { productSeeder } from './seeder/productSeeder';
import { seedAdmin } from './seeder/admin';

export async function seed() {
  await seedAdmin();
  await userSeeder();
  await productSeeder();
}

seed().then(() => {
  process.exit(0);
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
