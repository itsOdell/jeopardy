import { Request, Response } from "express";
const router = require('express').Router({caseSensitive: true});
const User = require("../db/models/Users");

router.get("/:username", async (req: Request, res: Response) => {
    try {
        const {username} = req.params;
        const user = await User.findOne({username});
        const data = {
            username: user.username,
            tier: user.tier,
            projects: user.projects,
            profilePicture: user.profilePicture
        }
        return res.status(200).json({data})
    } catch (error) {
        return res.status(400).json({error: (error as Error).message})
    }
});

router.get("/:username/:projectId", async (req: Request, res: Response) => {
    try {
        let username: string = req.params.username, projectId: string = req.params.projectId;
        const project = await User.findOne({username: username}).select({projects: {$elemMatch: {_id: projectId}}});
        return res.status(200).json(project)
    } catch (error) {
        return res.status(400).json({error: (error as Error).message})
    }
});

module.exports = router;