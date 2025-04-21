const Discussion = require('../models/Discussion');


const createDiscussion = async (req, res) => {
  try {
    const { title, category, relatedId } = req.body;
    const discussion = new Discussion({
      title,
      category,
      relatedId,
      categoryRef: category === 'Movie' ? 'Movie' : category === 'Genre' ? 'Genre' : 'Celebrity',
      createdBy: req.user.userId,
    });
    await discussion.save();
    res.status(201).json(discussion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDiscussionsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const discussions = await Discussion.find({ category }).populate('createdBy', 'username');
    res.status(200).json(discussions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createDiscussion,
  getDiscussionsByCategory
};