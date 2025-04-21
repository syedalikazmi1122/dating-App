const express = require('express');
const router = express.Router();
const commentController = require('../controllers/CommentController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, commentController.postComment);
router.get('/:postId', authMiddleware, commentController.getComments);
router.delete('/:commentId', authMiddleware, commentController.deleteComment);

module.exports = router;