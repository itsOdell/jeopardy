require("dotenv").config();
import { Request, Response, NextFunction } from "express";
const jwt = require('jsonwebtoken');
const JWT_SECRET: string = String(process.env.JWT_SECRET);

export async function authenticate(req: Request, res: Response, next: NextFunction) {
    try {
        const token = await jwt.verify(req.headers.bearer, JWT_SECRET);
         // @ts-ignore: Unreachable code error
        req.token = token;
        next()
    } catch (error) {
        return res.status(400).json({error: (error as Error).message});
    } 
}