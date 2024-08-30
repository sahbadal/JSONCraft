import express from 'express';
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} from '../controllers/postController.js'; // Importing from postController.js

const router = express.Router();

// Route to get all posts
router.get('/listPosts', getAllPosts);

// Route to get a post by ID
router.get('/listPosts/:id', getPostById);

// Route to create a new post
router.post('/createPosts', createPost);

// Route to update a post by ID
router.put('/updatePosts/:id', updatePost);

// Route to delete a post by ID
router.delete('/deletePosts/:id', deletePost);

export default router;
