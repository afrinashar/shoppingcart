import express from "express";
import { addProduct } from "../controllers/productController";

const router = express.Router();

router.post("/products", addProduct);
// Add routes for update, delete, fetch

export default router;
