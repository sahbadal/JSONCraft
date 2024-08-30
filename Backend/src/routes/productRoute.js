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
router.get('/listProducts', getAllProducts);

// Route to get a product by ID
router.get('/listProducts/:id', getProductById);

// Route to create a new product
router.post('/create', createProduct);

// Route to update a product by ID
router.put('/update/:id', updateProduct);

// Route to delete a product by ID
router.delete('/delete/:id', deleteProduct);

export default router;
