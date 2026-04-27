import { userSeeder } from './seeder/userSeeder';

export async function seed() {
  await userSeeder();
}

seed().then(() => {
  process.exit(0);
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
