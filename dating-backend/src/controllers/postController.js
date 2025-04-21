const Post = require('../models/Post');

const addPost = async (req, res) => {
  try {
    const post = new Post({
      content: req.body.content,
      images: req.body.images,
      videos: req.body.videos,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    await post.save();
    res.status(201).json({ message: "Post added successfully", post });
  } catch (error) {
    res.status(500).json({ message: "Error adding post", error });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, {
      ...req.body,
      updatedAt: new Date()
    }, { new: true });
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addPost,
  updatePost,
  deletePost,
  getPosts,
  getPost
};
