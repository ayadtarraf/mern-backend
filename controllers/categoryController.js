import Category from "../models/categorymodels.js";

// To get all the categories
export const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// to add a category

export const addCategory = async (req, res) => {
  const { name } = req.body;
  const category = new Category({ name: name });
  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// to get category by ID

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category Not Found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// to edit category by Id

export const updateCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category Not Found" });
    }
    category.name = req.body.name || category.name;
    const updated = await category.save();
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete category by Id
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndRemove(req.params.categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category Not Found" });
    }
    res.status(200).json({ message: "Category Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
