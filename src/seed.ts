import { userSeeder } from './seeder/userSeeder';
import { productSeeder } from './seeder/productSeeder';

export async function seed() {
  await userSeeder();
  await productSeeder();
}

seed().then(() => {
  process.exit(0);
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
