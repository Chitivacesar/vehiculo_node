import User from "../models/user.js";
import bcrypt from "bcryptjs";

export async function createUser(req, res) {
    const body = req.body;
    try{
        const user = new User(body);
        user.password = await bcrypt.hash(body.password,10)
        await user.save()
        res.status(201).json(user)
    }catch(error){
        res.status(500).json({error})
    }
    }

