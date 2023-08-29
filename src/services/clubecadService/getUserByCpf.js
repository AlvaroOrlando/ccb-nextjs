import { query } from "../../lib/db";

export async function getUserByCpf(cpf) {
  try {
    if (!cpf) {
      throw new Error("Missing 'cpf' parameter.");
    }

    const querySql = `SELECT * FROM clubecad WHERE cpf = ?`;

    const data = await query({ query: querySql, values: [cpf] });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
