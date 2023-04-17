import express from "express";
import imageupload from "../middleware/imageupload.js";
import {
  getAllProduct,
  addproduct,
  getProductById,
  updateProductById,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();
// get product
router.get("/", getAllProduct);

// add product
router.post("/",imageupload.single("image"), addproduct);

// get product by id
router.get("/:productId", getProductById);

// update product by id
router.put("/:productId", imageupload.single("image"),updateProductById);

//delete product
router.delete("/:productId", deleteProduct);



export default router;
