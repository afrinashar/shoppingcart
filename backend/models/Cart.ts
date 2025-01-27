import mongoose, { Document, Schema } from "mongoose";

 export interface ICartItem extends Document {
  productId: string;
  quantity: number;
  user: string;  
  productPrice: number;
}

const CartItemSchema: Schema = new Schema({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
  user: { type: String, required: true },
  productPrice: { type: Number, required: true }, 
});

export const CartItem = mongoose.model<ICartItem>("CartItem", CartItemSchema);
