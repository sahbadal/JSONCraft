import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js'; // Importing from productController.js

const router = express.Router();

// Route to get all products
router.get('/products', getAllProducts);

// Route to get a product by ID
router.get('/products/:id', getProductById);

// Route to create a new product
router.post('/products', createProduct);

// Route to update a product by ID
router.put('/products/:id', updateProduct);

// Route to delete a product by ID
router.delete('/products/:id', deleteProduct);

export default router;
