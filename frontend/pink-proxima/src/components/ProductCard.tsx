import React from "react";
import axios from "axios";

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", margin: "1rem" }}>
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product._id)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
