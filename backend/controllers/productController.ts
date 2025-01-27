import { Request, Response } from "express";
import { Product } from "../models/Product";

 export const addProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description } = req.body;
    const newProduct = new Product({ name, price, description });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to add product." });
  }
};

 export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId, name, price, description } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(productId, { name, price, description }, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product." });
  }
};

 export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }
    res.json({ message: "Product deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product." });
  }
};

 export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products." });
  }
};
