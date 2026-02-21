import express from "express";
import type { Application, Request, Response } from "express";
import userRoutes from "./routes/users.routes.js";

const app: Application = express();
const PORT = 5000;

app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Homepage");
});

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});