import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function connectToDatabase() {
  try {
    
    const client = await pool.connect();
    console.log('✓ Database connected successfully');
    client.release();
    return pool;
  } catch (error) {
    console.error('Failed to connect to database:', error);
    throw error;
  }
}

export default pool;
