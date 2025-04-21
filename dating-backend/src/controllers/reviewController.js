const Review = require('../models/Review');

const createReview = async (req, res) => {
  try {
    const { movieId, content } = req.body;
    const review = new Review({ user: req.user.userId, movie: movieId, content });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMovieReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ movie: req.params.movieId }).populate('user', 'username');
    res.json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateReview = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ error: 'Content is required' });
    }

    console.log(`Updating reviewId: ${req.params.reviewId} with content: ${content}`);

    const review = await Review.findByIdAndUpdate(
      req.params.reviewId,
      { content },
      { new: true }
    );

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.json(review);
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createReview,
  getMovieReviews,
  updateReview
};