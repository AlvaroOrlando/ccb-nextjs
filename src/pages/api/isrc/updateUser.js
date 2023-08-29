import { updateIsrcUserService } from "../../../services/isrcService/updateUser";

export default async function updateUserHandler(req, res) {
  try {
    const userData = req.body;
    const result = await updateIsrcUserService(userData);

    res.status(200).json(result);
  } catch (error) {
    console.error("Error processing the request:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
}
