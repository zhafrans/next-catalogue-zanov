import bcrypt from 'bcryptjs';
import { db } from '../../lib/db';
import { usersTable } from '../db/schema';

export async function seedAdmin() {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  try {
    await db.insert(usersTable).values({
      email: 'admin@zanov.com',
      password: hashedPassword,
      role: 'admin',
    });
    console.log('Admin user created: admin@zanov.com / admin123');
  } catch {
    console.log('Admin user may already exist');
  }
}

if (require.main === module) {
  seedAdmin().then(() => process.exit(0));
}
