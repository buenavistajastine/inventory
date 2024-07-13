import { Pool } from 'pg';
import 'dotenv/config';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use environment variable instead of hardcoding
});

export default pool;
