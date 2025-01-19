import { Request, Response } from "express";
import { CartItem } from "../models/Cart";

export const addToCart = async (req: Request, res: Response) => {
  try {
    const { productId, quantity } = req.body;
    const cartItem = new CartItem({ productId, quantity });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to add item to cart." });
  }
};

// Other functions: removeFromCart, updateCartItem, getCartItems
