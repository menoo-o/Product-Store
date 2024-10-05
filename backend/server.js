import express from "express";
import dotenv from "dotenv";
import {connectDB} from './config/db.js'
dotenv.config();

const port = 5000;
const app = express();

app.get("/products", (req, res)=>{
    res.send("server is ready");
})






app.listen(5000, ()=>{
    connectDB();
    console.log(`Server listening at PORT ${port}`);
})