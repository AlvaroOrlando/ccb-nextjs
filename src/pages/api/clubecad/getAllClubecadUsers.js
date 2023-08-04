import { query } from "../../../lib/db"

export default async function getAllClubecadUsers(req, res){
    if(req.method === "GET"){
      
        const users = await query({
            query:"SELECT * FROM clubecad",
            values:[]
        })
        res.status(200).json({users:users})
    }else {
        res.status(500).json({ users:"Erro de Método"})
    }
}



