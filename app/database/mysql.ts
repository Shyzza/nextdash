// src/database/mysql.ts
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST!,
  database: process.env.MYSQL_DATABASE!,
  user: process.env.MYSQL_USER!,
  password: process.env.MYSQL_PASSWORD!,
  connectionLimit: 10,
});

export async function query(query: string, values: any[] = []) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(query, values);
    return results;
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    connection.release();
  }
}
