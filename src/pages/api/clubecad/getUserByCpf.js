import { getUserByCpf } from "../../../services/clubecadService/getUserByCpf";

export default async function getUserByCpfHandler(req, res) {
  try {
    const { cpf } = req.query;

    const userData = await getUserByCpf(cpf);

    res.status(200).json({ users: userData });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

