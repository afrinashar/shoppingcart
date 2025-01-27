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
import { Request, Response } from "express";
import { CartItem } from "../models/Cart";

 const calculateDiscount = (cartQuantity: number): number => {
  let discount = 0;

  if (cartQuantity ) {
    discount =cartQuantity/2
  }  

  return discount;
};

 export const addToCart = async (req: Request, res: Response) => {
  try {
    const { productId, quantity } = req.body;
    
     const existingItem = await CartItem.findOne({ productId, user: req.user.id });

    if (existingItem) {
       existingItem.quantity += quantity;
      await existingItem.save();
    } else {
       const cartItem = new CartItem({ productId, quantity, user: req.user.id });
      await cartItem.save();
    }

     const updatedCart = await CartItem.find({ user: req.user.id });
    const cartQuantity = updatedCart.reduce((total, item) => total + item.quantity, 0);
    
     const discount = calculateDiscount(cartQuantity);
    const totalAmount = updatedCart.reduce(
      (total, item) => total + (item.productPrice * item.quantity), 0
    );
    const discountedAmount = totalAmount * (1 - discount);
    
     res.json({
      updatedCart,
      totalAmount,
      discount,
      discountedAmount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add item to cart." });
  }
};

 export const getCart = async (req: Request, res: Response) => {
  try {
    const cartItems = await CartItem.find({ user: req.user.id });
    const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const discount = calculateDiscount(cartQuantity);
    const totalAmount = cartItems.reduce(
      (total, item) => total + (item.productPrice * item.quantity), 0
    );
    const discountedAmount = totalAmount * (1 - discount);

    res.json({
      cartItems,
      totalAmount,
      discount,
      discountedAmount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};
