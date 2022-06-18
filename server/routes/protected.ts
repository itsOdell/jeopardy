import { Request, Response } from "express";
const router = require("express").Router();
const User = require("../db/models/Users");

router.get('/projects', async (req: Request, res: Response) => {
    try {
        // @ts-ignore: Unreachable code error
        const token = req.token;
        const user = await User.findOne({username: token.username});
        console.log(user)
        res.status(200).json({data: user.projects})
    } catch (error) {
        return res.status(400).json({error: (error as Error).message});
    }
})

module.exports = router;