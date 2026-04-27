import 'dotenv/config';
import { seed } from './seed';

async function main() {
  await seed();
}

main();
