require('dotenv').config;
import { Request, Response } from "express";
import { HydratedDocument } from "mongoose";
const router = require("express").Router();
const bcrypt = require('bcryptjs');
const User = require("../db/models/Users");
const jwt = require("jsonwebtoken");
const JWT_SECRET: string = String(process.env.JWT_SECRET);

router.post('/register', async (req: Request, res: Response) => {
    try {
        interface User {
            username: string,
            email: string,
            password: string
        }
        const user: HydratedDocument<User> = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        await user.save();
        res.status(200).json({data: "Success"});
    } catch (error) {
        res.status(400).json({error: (error as Error).message});
    }
});

router.post("/login", async (req: Request, res: Response) => {
    try {
        let {email, password} = req.body;
        //user exists
        const exists = await User.findOne({email: email});
        if (exists === null) {
            // return res.status(400).json({error: "User does not exist"})
            throw {message: "User does not exist"};
        }

        //if exists then check password;
        const passwordMatches = await bcrypt.compare(password, exists.password);
        if (!passwordMatches) {
            // return res.status(400).json({error: "Incorrect password"});
            throw {message: "Incorrect password"};
        }

        //if password matches, then send token
        const token = jwt.sign({username: exists.username}, JWT_SECRET)
        res.status(200).json({token: token})
    } catch (error) {
        return res.status(400).json({error: (error as Error).message})
    }
});

module.exports = router;