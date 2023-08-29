// pages/api/isrc/getUserFromIsrcByCpf.js

import { query } from "../../../lib/db";

export default async function getUserFromIsrcByCpf(req, res) {
  try {
    const { cpf } = req.query;

    if (!cpf) {
      return res.status(400).json({ error: "Missing 'cpf' parameter." });
    }

    const querySql = `SELECT * FROM isrc WHERE cpf = ?`;

    const data = await query({ query: querySql, values: [cpf] });

    res.status(200).json({ users: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
