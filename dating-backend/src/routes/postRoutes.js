const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

// Create a new post
router.post('/', postController.addPost);

// Get all posts
router.get('/', postController.getPosts);

// Get a single post by ID
router.get('/:id', postController.getPost);

// Update a post by ID
router.put('/:id', postController.updatePost);

// Delete a post by ID
router.delete('/:id', postController.deletePost);

module.exports = router;