import { query } from "../../lib/db";

export async function createIsrcUserService(userData) {
  try {
    // Destructure user data from the input object
    const { nome, nart, cpf, email, endereco, cep, cidade, estado, telefone } = userData;

    // Validate the required form fields (you can add more validation as needed)
    if (!nome || !nart || !cpf || !email || !endereco || !cep || !cidade || !estado || !telefone) {
      throw new Error("Please fill all required fields.");
    }

    // Insert the new user into the 'isrc' table
    const querySql = `
      INSERT INTO isrc (nome, nart, cpf, email, endereco, cep, cidade, estado, telefone)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [nome, nart, cpf, email, endereco, cep, cidade, estado, telefone];
    const insertResult = await query({ query: querySql, values });

    if (insertResult.affectedRows === 1) {
      return { message: "User created successfully." };
    } else {
      throw new Error("Failed to create user.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
