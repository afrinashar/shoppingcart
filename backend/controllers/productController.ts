import { Request, Response } from "express";
import { Product } from "../models/Product";

export const addProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description, imageUrl, stock } = req.body;
    const product = new Product({ name, price, description, imageUrl, stock });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to add product." });
  }
};

// Other CRUD functions (updateProduct, deleteProduct, getProducts, getProductById)...
