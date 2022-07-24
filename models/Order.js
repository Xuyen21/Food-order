import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
  customer: {
    type: String,
    required: true,
    maxlength: 60,
  },
  address: {
    type: String,
    required: true,
    maxlength: 200,
  },
  total: {
    type: Number,
    default: 0,
  },
  status: {
    type: Number,
    default: 0,
  },
  method: {
    type: Number,
    default: 0,
  },
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema)
