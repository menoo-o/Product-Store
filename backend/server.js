import express from "express";
import dotenv from "dotenv";
dotenv.config();
import {connectDB} from './config/db.js'

import productRoutes from './routes/product.route.js'


const app = express();
const port = process.env.PORT || 5000;

// Middleware to handle JSON request body
app.use(express.json());

//routes
app.use("/api/products", productRoutes)

app.listen(5000, ()=>{
    connectDB();
    console.log(`Server listening at PORT ${port}`);
})