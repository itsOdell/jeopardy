require("dotenv").config();
import { NextFunction, Request, Response, Express } from "express";
const express = require("express");
const app: Express = express();
const cors = require('cors');
const mongoose = require('mongoose');

//local files
const {PORT, MONGODB_URI} = process.env;
const indexRouter = require('./routes/index');
const protectedRouter = require('./routes/protected');
const {authenticate} = require("./middleware/authenticate")

async function connectDB(): Promise<void> {
    try {
        await mongoose.connect(MONGODB_URI, 
        {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Connected to MongoDB");
    } catch (error: any) {
        console.log(`Error ${error}`);
    }
};
connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: "*"}));
app.use("/", indexRouter);
app.use('/auth', authenticate);
app.use('/auth', protectedRouter);

app.listen(PORT, (): void => {
    console.log(`listening on port ${PORT}`);
})