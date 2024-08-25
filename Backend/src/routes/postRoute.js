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
router.get('/posts', getAllPosts);

// Route to get a post by ID
router.get('/posts/:id', getPostById);

// Route to create a new post
router.post('/posts', createPost);

// Route to update a post by ID
router.put('/posts/:id', updatePost);

// Route to delete a post by ID
router.delete('/posts/:id', deletePost);

export default router;
