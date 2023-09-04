import mongoose from 'mongoose';


const orderSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type:Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
  },
  postalcode: {
    type: Number,
  },
  createdAt:{
    type:Date,
    default:Date.now()
  }
});








export default mongoose.models.Order || mongoose.model('Order', orderSchema);
