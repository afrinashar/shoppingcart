import React from "react";
import {Link} from "@astrojs/react"

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#333", color: "#fff" }}>
      <h1>Shopping Cart App</h1>
      <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
        <li>
          <Link href="/" style={{ color: "#fff" }}>Home</Link>
        </li>
        <li>
          <Link href="/cart" style={{ color: "#fff" }}>Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
