import { query } from "../../lib/db";

export async function getAllUsers() {
  try {
    const users = await query({
      query: "SELECT * FROM clubecad",
      values: [],
    });

    return users;
  } catch (error) {
    throw new Error(error.message);
  }
}
