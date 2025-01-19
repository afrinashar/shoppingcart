import express from "express";
import { addToCart } from "../controllers/cartController";

const router = express.Router();

router.post("/cart", addToCart);
// Add routes for update, delete, fetch

export default router;
