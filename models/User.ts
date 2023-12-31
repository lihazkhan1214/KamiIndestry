import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [3, "Your password must be longer than 6 characters"],
  },
  role: {
    type: String,
    default: "user",
  }
});



export default mongoose.models.User || mongoose.model("User", userSchema);