const Rating = require('../models/Rating');
const Movie = require('../models/Movie');

const rateMovie = async (req, res) => {
  try {
    const { movieId, rating } = req.body;
    const userId = req.user.userId;
    let userRating = await Rating.findOne({ user: userId, movie: movieId });
    if (userRating) {
      userRating.rating = rating;
    } else {
      userRating = new Rating({ user: userId, movie: movieId, rating });
    }
    await userRating.save();

    const ratings = await Rating.find({ movie: movieId });
    const averageRating = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
    await Movie.findByIdAndUpdate(movieId, { averageRating });

    res.json({ message: 'Rating saved successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  rateMovie
}; 