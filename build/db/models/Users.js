"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
require("dotenv").config();
var bcrypt = require('bcryptjs');
var _a = require('mongoose'), Schema = _a.Schema, model = _a.model;
var uniqueValidator = require("mongoose-unique-validator");
var SALT = Number(process.env.SALT);
var userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Enter a username"],
        unique: [true, "Username is already taken"],
        minLength: [6, "Username must be at least 6 characters"]
    },
    email: {
        type: String,
        required: [true, "Enter your email address"],
        unique: [true, "Email is already in use"],
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Enter your password"],
        minLength: [8, "Password must be at least 8 characters"],
        validate: {
            validator: function (v) {
                return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(v);
            },
            message: "Password must contain: at lease 1 lowercase, at least 1 uppercase and least 1 number"
        }
    },
    tier: {
        type: String,
        default: "free"
    },
    profilePicture: {
        type: String,
        default: null
    },
    projects: [
        {
            "projectName": {
                type: String,
                unique: [true, "project name is already taken"]
            },
            "projectData": [
                {
                    "part": String,
                    "one": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "two": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "three": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "four": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "five": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    _id: false
                },
                {
                    "part": String,
                    "one": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "two": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "three": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "four": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "five": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    _id: false
                },
                {
                    "part": String,
                    "one": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "two": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "three": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "four": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "five": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    _id: false
                },
                {
                    "part": String,
                    "one": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "two": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "three": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "four": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "five": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    _id: false
                },
                {
                    "part": String,
                    "one": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "two": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "three": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "four": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "five": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    _id: false
                }
            ]
        }
    ],
    privateProjects: [
        {
            "projectName": {
                type: String,
                unique: [true, "project name is already taken"]
            },
            "projectData": [
                {
                    "part": String,
                    "one": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "two": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "three": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "four": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "five": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    _id: false
                },
                {
                    "part": String,
                    "one": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "two": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "three": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "four": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "five": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    _id: false
                },
                {
                    "part": String,
                    "one": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "two": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "three": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "four": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "five": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    _id: false
                },
                {
                    "part": String,
                    "one": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "two": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "three": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "four": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "five": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    _id: false
                },
                {
                    "part": String,
                    "one": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "two": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "three": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "four": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    "five": {
                        "question": String,
                        "value": Number,
                        "answer": String
                    },
                    _id: false
                }
            ]
        }
    ]
}, { timestamps: true });
userSchema.plugin(uniqueValidator);
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function () {
        var user, hashedPassword, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    user = this;
                    if (!user.isModified('password'))
                        return [2 /*return*/, next()];
                    return [4 /*yield*/, bcrypt.hash(user.password, SALT)];
                case 1:
                    hashedPassword = _a.sent();
                    user.password = hashedPassword;
                    return [2 /*return*/, next()];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
var User = model('Users', userSchema);
module.exports = User;
