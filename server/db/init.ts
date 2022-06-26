require("dotenv").config();
const MONGODB_URI: string = String(process.env.MONGODB_URI);
const mongoose = require("mongoose")

export async function connectDB(): Promise<void> {
    try {
        await mongoose.connect(MONGODB_URI, 
        {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Connected to MongoDB");
    } catch (error: any) {
        console.log(`Error ${error}`);
    }
};