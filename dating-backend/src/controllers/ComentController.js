const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');

const postComment = async (req, res) => {
  try {
    const { postId, content } = req.body;
    const comment = new Comment({
      user: req.user.userId,
      post: postId,
      content,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getComments = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.find({ post: postId }).populate('user', 'name photo');
    res.json(comments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    if (comment.user.toString() !== req.user.userId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    await comment.remove();
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postComment,
  getComments,
  deleteComment,
};