import 'dotenv/config';
import mysql from 'mysql2/promise';

async function resetDatabase() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL!);

  try {
    console.log('Dropping all tables...');

    // Drop specific tables
    const tables = ['users', 'products', 'users_table'];
    
    for (const tableName of tables) {
      await connection.query(`DROP TABLE IF EXISTS \`${tableName}\``);
      console.log(`Dropped table: ${tableName}`);
    }

    console.log('All tables dropped successfully!');
  } catch (error) {
    console.error('Error dropping tables:', error);
    throw error;
  } finally {
    await connection.end();
  }
}

resetDatabase();
