require("dotenv").config();
import { Express } from "express";
const express = require("express");
const app: Express = express();
const cors = require('cors');
const path = require('path');

//local files
const {PORT} = process.env;
const indexRouter = require('./routes/index');
const protectedRouter = require('./routes/protected');
const viewUsers = require('./routes/viewUsers');
const projectSetting = require('./routes/projectSetting');
const {authenticate} = require("./middleware/authenticate")
const {connectDB} = require("./db/init");
connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: "*"}));
app.use("/", indexRouter);
app.use('/auth', authenticate);
app.use('/auth', protectedRouter);
app.use("/projectSetting", authenticate);
app.use("/projectSetting", projectSetting);
app.use("/view", viewUsers);

if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

app.listen(PORT, (): void => {
    console.log(`listening on port ${PORT}`);
})