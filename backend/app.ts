import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import productRoutes from "./routes/productRoutes";
import cartRoutes from "./routes/cartRoutes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

export default app;
