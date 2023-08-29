import { getAllUsers } from "../../../services/clubecadService/getAllUsers";

export default async function getAllClubecadUsersHandler(req, res) {
  try {
    if (req.method === "GET") {
        
      const users = await getAllUsers();

      res.status(200).json({ users: users });
    } else {
      res.status(500).json({ error: "Erro de Método" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
