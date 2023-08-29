import { getAllIsrcUsersService } from "../../../services/isrcService/getAllUsers";

export default async function getAllIsrcUsersHandler(req, res) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const users = await getAllIsrcUsersService();

    res.status(200).json({ users: users });
  } catch (error) {
    console.error("Error processing the request:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
}
