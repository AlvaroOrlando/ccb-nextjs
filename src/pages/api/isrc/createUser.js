import { createIsrcUserService } from "../../../services/isrcService/createUser";

export default async function createIsrcUserHandler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const userData = req.body;
    const result = await createIsrcUserService(userData);

    res.status(201).json(result);
  } catch (error) {
    console.error("Error processing the request:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
}
