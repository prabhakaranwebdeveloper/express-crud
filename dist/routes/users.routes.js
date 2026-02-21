import express from "express";
import { createUser, getUsers, getUser, deleteUser, updateUser, } from "../controllers/users.controller.js";
const router = express.Router();
router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);
export default router;
//# sourceMappingURL=users.routes.js.map