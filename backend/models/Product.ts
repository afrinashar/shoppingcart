import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  imageUrl: String,
  stock: { type: Number, required: true },
});

export const Product = mongoose.model("Product", productSchema);
