import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  heading:{
    type:String,
    required:true

  },
  images: [
    {
      url: {
        type: String,
      },
    },
  ],

  category: {
    type: String,
    required: [true, "Please enter product category"],
    enum: {
      values: [
        "Eyelash",
        "Eyebrow",
        "Mirror",
        "Municure"
      ],
      message: "Please select correct category",
    },
  },
  featured: {
    type: Boolean,
    required: [true, "Please select featued item"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);