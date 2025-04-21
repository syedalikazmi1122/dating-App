const User = require('../models/User');
const Profile = require('../models/Profile');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Story = require('./../models/stories')
const register = async (req, res) => {
  try {
    const { phone, email, password } = req.body;
    const user = new User({ 
      phone, 
      email, 
      password, 
      isAdmin: false,
      isVerified: false,
      authProvider: 'email'
    });
    await user.save();
    res.status(201).json({ message: 'Request received please wait until admins Approve.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check if user is approved by admin
    if (!user.isVerified) {
      return res.status(403).json({ error: 'Your account is pending admin approval' });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user._id, 
        isAdmin: user.isAdmin,
        email: user.email
      }, 
      process.env.JWT_SECRET, 
      { expiresIn: '24h' }
    );

    // Get user profile if exists
    const profile = await Profile.findOne({ user: user._id });

    res.json({ 
      token,
      user: {
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin,
        profileCompleted: user.profileCompleted,
        authProvider: user.authProvider
      },
      profile: profile || null
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const updateProfile = async (req, res) => {
  try {
    const { name, password, interests, Prefrences,gender,age ,picture } = req.body;
    const updates = {};

    if (username) updates.username = username;
    if (password) updates.password = await bcrypt.hash(password, 10);
    if (favoriteGenres) updates['preferences'] = favoriteGenres;
    if (favoriteActors) updates['preferences'] = favoriteActors;

    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { $set: updates },
      { new: true }
    );

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addStory = async (req, res) => {
  try {
    const { user, content, contentType, videoLength } = req.body;
    const story = new Story({ user, content, contentType, videoLength });
    await story.save();
    res.status(201).json(story);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id).populate('user', 'name photo');
    res.json(story);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteStory = async (req, res) => {
  try {
    await Story.findByIdAndDelete(req.params.id);
    res.json({ message: 'Story deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
module.exports = {
  register,
  login,
  updateProfile,
  addStory,
  getStory,
  deleteStory
};