import express from "express";
import {
  getAllCategory,
  addCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategory,
} from "../controllers/categoryController.js";

const router = express.Router();
// get category
router.get("/", getAllCategory);

// add category
router.post("/", addCategory);

// get category by id
router.get("/:categoryId", getCategoryById);

// update category by id
router.put("/:categoryId", updateCategoryById);

//delete category
router.delete("/:categoryId", deleteCategory);

export default router;
