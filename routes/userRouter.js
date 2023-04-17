import express from "express";
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  login,
  logout,
  register
} from "../controllers/userController.js";

const router = express.Router();

// GET /users
router.get("/", getAllUsers);

// POST /users
router.post("/", createUser);

// GET /users/:userId
router.get("/:userId", getUserById);

// PUT /users/:userId
router.put("/:userId", updateUser);

// DELETE /Users/:UserId
router.delete("/:userId", deleteUser);

//post login
router.post("/login", login);

//post logout
router.post("/logout", logout);

//post register
router.post("/register", register);

export default router;