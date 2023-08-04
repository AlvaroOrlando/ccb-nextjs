import mysql from 'mysql2/promise';

const access = {
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const pool = mysql.createPool(access);

export async function query({ query, values }) {
  try {
    const connection = await pool.getConnection();
    const [results] = await connection.execute(query, values);
    connection.release();
    return results;
  } catch (error) {
    throw new Error(error.message);
  }
}
