import { Request, Response} from 'express';
const router = require('express').Router();
const User = require("../db/models/Users");
const {validateProject, validateTier} = require("../validator/validateProject")

//validate

router.post("/save", async (req: Request, res: Response) => {
    try {
        // @ts-ignore: Unreachable code error
        const token = req.token;
        const project = JSON.parse(req.body.project);
        const projectType = req.body.projectType === "public" ?  "projects" : "privateProjects";
        let user = await User.findOne({username: token.username});
        if (validateTier(user.tier, user, projectType) == false) {
            return res.status(400).json({error: "Upgrade your tier, max limit reached"});
        }
        if (validateProject(project) == false) {
            throw {message: "provide project and project name"}
        }
        await user.updateOne({
            $addToSet: {
                [projectType]: project
            }
         })
        res.status(200).json({data: "succesfully saved"});
    } catch (error) {
        res.status(400).json({error: (error as Error).message})
    }
})

router.delete("/delete", async (req: Request, res: Response) => {
    try {
        // @ts-ignore: Unreachable code error
        const token = req.token;
        const projectId = req.body._id;
        const projectType = req.body.projectType === "public" ?  "projects" : "privateProjects";
        let user = await User.findOne({username: token.username});
        await user.updateOne({
            $pull: {
                [projectType]: {
                    _id: projectId
                }
            }
        })
        res.status(200).json({data: "succesfully deleted project"})
    } catch (error) {
        res.status(400).json({error: (error as Error).message})
    }
})

module.exports = router;