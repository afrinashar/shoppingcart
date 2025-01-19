import React, { useEffect, useState } from "react";
import axios from "axios";

interface CartItem {
  _id: string;
  productId: string;
  quantity: number;
  productDetails: {
    name: string;
    price: number;
    imageUrl: string;
  };
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const response = await axios.get("http://localhost:5000/api/cart");
    setCartItems(response.data);
  };

  const updateQuantity = async (id: string, quantity: number) => {
    await axios.put(`http://localhost:5000/api/cart/${id}`, { quantity });
    fetchCart();
  };

  const removeItem = async (id: string) => {
    await axios.delete(`http://localhost:5000/api/cart/${id}`);
    fetchCart();
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item._id} style={{ borderBottom: "1px solid #ddd", padding: "1rem" }}>
          <img
            src={item.productDetails.imageUrl}
            alt={item.productDetails.name}
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <h2>{item.productDetails.name}</h2>
          <p>Price: ${item.productDetails.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
          <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>-</button>
          <button onClick={() => removeItem(item._id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
