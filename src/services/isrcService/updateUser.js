import { query } from "../../lib/db";

export async function updateIsrcUserService(userData) {
  try {
    const { nome, nart, cpf, email, endereco, cep, cidade, estado, telefone } = userData;

    if (!nome || !nart || !cpf || !email || !endereco || !cep || !cidade || !estado || !telefone) {
      throw new Error("Please fill all required fields.");
    }

    const querySql = `
      UPDATE isrc
      SET nome = ?, nart = ?, cpf = ?, email = ?, endereco = ?, cep = ?, cidade = ?, estado = ?, telefone = ?
      WHERE cpf = ?
    `;
    const values = [nome, nart, cpf, email, endereco, cep, cidade, estado, telefone, cpf];
    const updateResult = await query({ query: querySql, values });

    if (updateResult.affectedRows === 1) {
      return { message: "User updated successfully." };
    } else {
      throw new Error("Failed to update user.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
