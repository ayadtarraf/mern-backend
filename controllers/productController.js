import Product from "../models/productmodel.js";
import fs from "fs";
import path from "path";

// Get all PRODUCT
export const getAllProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addproduct = async (req, res) => {
    try {
      const { name, description, price } = req.body;
      const product = new Product({
        name,
        description,
        price,
        image: req.file.filename, // Assuming the uploaded file is an image
      });
      await product.save(); // Use await instead of callback
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
// Get product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an product
export const updateProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.category_id = req.body.category_id || product.category_id;
    product.price = req.body.price || product.price;
    product.name = req.body.name || product.name;
    product.description = req.body.description || product.description;
    product.image = req.body.image || product.image;
   

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};