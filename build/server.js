"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var express = require("express");
var app = express();
var cors = require('cors');
var path = require('path');
//local files
var PORT = process.env.PORT;
var indexRouter = require('./routes/index');
var protectedRouter = require('./routes/protected');
var viewUsers = require('./routes/viewUsers');
var projectSetting = require('./routes/projectSetting');
var authenticate = require("./middleware/authenticate").authenticate;
var connectDB = require("./db/init").connectDB;
connectDB();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use("/", indexRouter);
app.use('/auth', authenticate);
app.use('/auth', protectedRouter);
app.use("/projectSetting", authenticate);
app.use("/projectSetting", projectSetting);
app.use("/view", viewUsers);
if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'));
    app.get("*", function (req, res) {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
app.listen(PORT, function () {
    console.log("listening on port ".concat(PORT));
});
