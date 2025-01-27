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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [discount, setDiscount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [discountedAmount, setDiscountedAmount] = useState<number>(0);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:5000/api/cart");
      setCartItems(response.data.cartItems);
      calculateTotal(response.data.cartItems);
    } catch (err) {
      setError("Failed to fetch cart data.");
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = (items: CartItem[]) => {
    let total = 0;
    let totalQuantity = 0;
    items.forEach((item) => {
      total += item.productDetails.price * item.quantity;
      totalQuantity += item.quantity;
    });
    
    // Discount calculation logic
    const appliedDiscount = calculateDiscount(totalQuantity);

    setDiscount(appliedDiscount);
    setTotalAmount(total);
    setDiscountedAmount(total - total * appliedDiscount);
  };

  const calculateDiscount = (quantity: number): number => {
    if (quantity >= 20) return 0.1; // 10% discount for 20 or more items
    if (quantity >= 10) return 0.05; // 5% discount for 10 or more items
    return 0; // No discount for less than 10 items
  };

  const updateQuantity = async (id: string, quantity: number) => {
    if (quantity < 1) return; // Prevent quantity from going below 1
    try {
      await axios.put(`http://localhost:5000/api/cart/${id}`, { quantity });
      fetchCart();
    } catch (err) {
      setError("Failed to update quantity.");
    }
  };

  const removeItem = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${id}`);
      fetchCart();
    } catch (err) {
      setError("Failed to remove item.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
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
        ))
      )}
      <div>
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
        <h3>Discount Applied: {discount * 100}%</h3>
        <h3>Total After Discount: ${discountedAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
