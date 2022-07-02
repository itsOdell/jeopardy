import { Request, Response } from "express";
const router = require("express").Router();
const User = require("../db/models/Users");

router.get('/me', async (req: Request, res: Response) => {
    try {
        // @ts-ignore: Unreachable code error
        const token = req.token;
        const user = await User.findOne({username: token.username});
        const data = {
            username: user.username,
            email: user.email,
            tier: user.tier,
            projects: user.projects,
            privateProjects: user.privateProjects,
            profilePicture: user.profilePicture
        }
        res.status(200).json({data})
    } catch (error) {
        return res.status(400).json({error: (error as Error).message});
    }
});

router.get("/:projectType/:projectId", async (req: Request, res: Response) => {
    try {
        // @ts-ignore: Unreachable code error
        const token = req.token;
        const {projectId, projectType} = req.params;
        const project = await User.findOne({username: token.username}).select({[projectType]: {$elemMatch: {_id: projectId}}});
        return res.status(200).json(project)
    } catch (error) {
        return res.status(400).json({error: (error as Error).message})
    }
});

router.get("/authenticate", async (req: Request, res: Response) => {
    try {
        return res.status(200).json({token: req.headers.bearer})
    } catch (error) {
        return res.status(400).json({error: (error as Error).message})
    }
})

module.exports = router;
