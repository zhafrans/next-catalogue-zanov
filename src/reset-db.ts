import 'dotenv/config';
import mysql from 'mysql2/promise';

async function resetDatabase() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL!);

  try {
    console.log('Dropping all tables...');

    // Get all table names using SHOW TABLES
    const [rows] = await connection.query('SHOW TABLES') as any[];

    // Drop each table
    for (const row of rows) {
      const tableName = Object.values(row)[0] as string;
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
