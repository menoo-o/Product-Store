import express from "express";
const router = express.Router();
import Product from "../models/product.model.js";
import mongoose from "mongoose";
import { getProducts, postProducts, deleteProducts, updateProducts } from "../controllers/product.controller.js";

//POST Products
router.post("/", postProducts )

// GET API to display products
router.get("/", getProducts );


//delete product
router.delete("/:id", deleteProducts)

//update product
router.put("/:id", updateProducts)



export default router;