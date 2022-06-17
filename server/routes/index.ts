require('dotenv').config;
import { Request, Response } from "express";
import { HydratedDocument } from "mongoose";
const router = require("express").Router();
const bcrypt = require('bcryptjs');
const User = require("../db/models/Users");
const SALT: number = Number(process.env.SALT);

router.post('/register', async (req: Request, res: Response) => {
    try {
        interface User {
            username: string,
            email: string,
            password: string
        }
        const hashedPass = await bcrypt.hash(req.body.password, SALT);
        const user: HydratedDocument<User> = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        });
        await user.save();
        res.send(200).json();
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
});

router.post("/login", async (req: Request, res: Response) => {
    try {
        let {email, password} = req.body;
        const exists = await User.findOne({email: email});
        if (exists === null) {
            return res.status(400).json({error: "User does not exist"})
        }
        // console.log(exists)
        const passwordMatches = await bcrypt.compare(password, exists.password);
        if (!passwordMatches) {
            return res.status(400).json({error: "Incorrect password"});
        }
    } catch (error: any) {
        console.log(error.message)
    }
});

module.exports = router;