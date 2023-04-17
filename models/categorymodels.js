import mongoose from "mongoose";

const { Schema, model } = mongoose;
const categorySchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  {
    collection: "Category",
  }
);

const Category = model("Category", categorySchema);
export default Category;