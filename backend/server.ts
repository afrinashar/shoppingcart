import app from "./app";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/shopping-cart";

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("DB connection error:", err));
