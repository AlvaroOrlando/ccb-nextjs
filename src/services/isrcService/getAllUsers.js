import { query } from "../../lib/db";

export async function getAllIsrcUsersService() {
  try {
    const querySql = `SELECT * FROM isrc`;
    const users = await query({ query: querySql });

    return users;
  } catch (error) {
    throw new Error(error.message);
  }
}
