import express from "express";
import userRoutes from "./routes/users.routes.js";
const app = express();
const PORT = 5000;
app.use(express.json());
app.use("/users", userRoutes);
app.get("/", (req, res) => {
    res.send("welcome to homepage");
});
app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map