import { log } from "console";
import sql from "mssql";

const config = {
  user: process.env.MSSQL_USER!,
  password: process.env.MSSQL_PASSWORD!,
  server: process.env.MSSQL_HOST!,
  database: process.env.KPK_DATABASE!,
  options: {
    encrypt: true, // Set to true if you're using Azure
    trustServerCertificate: true,
  },
  pool: {
    max: 10, // Maximum number of connections in the pool
    min: 0, // Minimum number of connections in the pool
    idleTimeoutMillis: 30000, // How long a connection is allowed to be idle before being closed
  },
};

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

pool.on("error", (err) => {
  console.error("Database pool error:", err);
});

export async function query(query: string, values: any[] = []) {
  log("res");
  await poolConnect; // Ensure the connection is established
  try {
    const request = pool.request();
    if (values.length > 0) {
      values.forEach((value, index) => {
        request.input(index.toString(), value);
      });
    }
    const result = await request.query(query);
    return result.recordset;
  } catch (error: any) {
    // Use 'any' type for error
    throw new Error(error.message);
  }
}
