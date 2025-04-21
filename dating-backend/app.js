const express = require('express');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');
const profileRoutes = require('./src/routes/profileRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
// const ratingRoutes = require('./src/routes/ratingRoutes');
// const reviewRoutes = require('./src/routes/reviewRoutes');
// const listRoutes = require('./src/routes/listRoutes');
// const newsRoutes = require('./src/routes/newsRoutes');
// const celebrityRoutes = require('./src/routes/celebrityRoutes');
// const DiscussionRoutes = require('./src/routes/discussionRoutes');
const app = express();

app.use(cors());
app.use(express.json());

// Auth and User routes
app.use('/users', userRoutes);
app.use('/profiles', profileRoutes);
app.use('/admin', adminRoutes);
// app.use('/api/movies', movieRoutes);
// app.use('/api/ratings', ratingRoutes);
// app.use('/api/reviews', reviewRoutes);
// app.use('/api/lists', listRoutes);
// app.use('/api/news', newsRoutes);
// app.use('/api/celebrities', celebrityRoutes);
// app.use('/api/discussions', DiscussionRoutes); 


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;