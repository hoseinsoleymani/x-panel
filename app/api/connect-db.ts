import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

type Data = {
  currentTime?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  let connection;

  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows] = await connection.execute<{ currentTime: string }[]>('SELECT NOW() AS currentTime');
    res.status(200).json({ currentTime: rows[0].currentTime });
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ error: 'Database query error' });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}