const User = require('../models/User');
const Movie = require('../models/Movie');
const Rating = require('../models/Rating');
const mongoose = require('mongoose');

exports.getRecommendations = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  const { favoriteGenres, favoriteActors } = user.preferences;
  let recommendations = [];

  
  if (favoriteGenres.length > 0) {
    const genreMovies = await Movie.find({ genre: { $in: favoriteGenres } });
    recommendations = recommendations.concat(genreMovies);
  }

  
  if (favoriteActors.length > 0) {
    const actorMovies = await Movie.find({ cast: { $in: favoriteActors } });
    recommendations = recommendations.concat(actorMovies);
  }

  
  const userRatings = await Rating.find({ userId }).populate('movieId');
  const ratedMovies = userRatings.filter((rating) => rating.rating >= 4); 
  const ratedMovieIds = ratedMovies.map((rating) => rating.movieId._id);

  if (ratedMovieIds.length > 0) {
    const ratedMoviesRecommendations = await Movie.find({
      _id: { $in: ratedMovieIds },
    });
    recommendations = recommendations.concat(ratedMoviesRecommendations);
  }

  recommendations = [
    ...new Set(recommendations.map((movie) => movie._id)),
  ].map((id) => recommendations.find((movie) => movie._id.equals(id)));

  return recommendations;
};

exports.getSimilarTitles = async (movieId) => {
  const movie = await Movie.findById(movieId);
  if (!movie) throw new Error('Movie not found');

  let similarMovies = [];

  const genreMovies = await Movie.find({ genre: { $in: movie.genre } }).limit(5);
  similarMovies = similarMovies.concat(genreMovies);

  const directorMovies = await Movie.find({
    director: movie.director,
  }).limit(5);
  similarMovies = similarMovies.concat(directorMovies);

  
  const popularMovies = await Movie.find({ averageRating: { $gte: 4 } }).limit(5);
  similarMovies = similarMovies.concat(popularMovies);

  
  similarMovies = [
    ...new Set(similarMovies.map((movie) => movie._id)),
  ].map((id) => similarMovies.find((movie) => movie._id.equals(id)));

  return similarMovies;
};

exports.getTrendingMovies = async () => {
  
  const trendingMovies = await Rating.aggregate([
    { $group: { _id: "$movieId", count: { $sum: 1 } } },
    { $sort: { count: -1 } }, 
    { $limit: 10 },
  ])
    .populate("movieId")
    .exec();

  return trendingMovies.map((entry) => entry.movieId);
};

exports.getTopRatedMovies = async () => {
  const topRatedMovies = await Movie.find({ averageRating: { $gte: 4 } })
    .sort({ averageRating: -1 })
    .limit(10);

  return topRatedMovies;
};
