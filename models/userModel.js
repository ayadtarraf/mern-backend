import mongoose from "mongoose";
const { Schema, model } = mongoose;
const userSchema = new Schema({
  Firstname: {
    type: "string",
    required: true,
  },
  lastname: {
    type: "string",
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
 

});
const UserModel = model("User", userSchema);
export default UserModel;
