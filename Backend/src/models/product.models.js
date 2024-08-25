import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  dimensions: {
    height: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    depth: {
      type: String,
      required: true,
    },
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  warranty: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
