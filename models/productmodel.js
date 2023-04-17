import { TextField } from "@mui/material";
import mongoose from "mongoose";

const { Schema, model } = mongoose;
const productSchema = new Schema(
  {
    category_id: {
           type: mongoose.Schema.Types.ObjectId,
          ref: "Category",
         },
    name: {
      type: String,
      requried:true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }

  },
  {
    collection: "Product",
  }
  
)
productSchema.pre(["find", "findOne", "save", "create"], function () {
   this.populate(["category_id"]);
 });

const Product = model("Product", productSchema);
export default Product;