const Profile = require('../models/Profile');
const User = require('../models/User');

// Update name
exports.updateName = async (req, res) => {
  try {
    const { name } = req.body;
    const profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { name },
      { new: true, upsert: true }
    );
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update age
exports.updateAge = async (req, res) => {
  try {
    const { age } = req.body;
    const profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { age },
      { new: true, upsert: true }
    );
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update gender
exports.updateGender = async (req, res) => {
  try {
    const { gender } = req.body;
    const profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { gender },
      { new: true, upsert: true }
    );
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update looking for
exports.updateLookingFor = async (req, res) => {
  try {
    const { lookingFor } = req.body;
    const profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { lookingFor },
      { new: true, upsert: true }
    );
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update interests
exports.updateInterests = async (req, res) => {
  try {
    const { interests } = req.body;
    const profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { interests },
      { new: true, upsert: true }
    );
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Upload photos
exports.uploadPhotos = async (req, res) => {
  try {
    const photos = req.files.map(file => ({
      url: file.path,
      isProfile: false
    }));
    
    const profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { $push: { photos: { $each: photos } } },
      { new: true, upsert: true }
    );
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Upload videos
exports.uploadVideos = async (req, res) => {
  try {
    const videos = req.files.map(file => ({
      url: file.path,
      thumbnail: file.thumbnail || ''
    }));
    
    const profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { $push: { videos: { $each: videos } } },
      { new: true, upsert: true }
    );
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update location
exports.updateLocation = async (req, res) => {
  try {
    const { coordinates, address } = req.body;
    const profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { 
        location: {
          type: 'Point',
          coordinates,
          address
        }
      },
      { new: true, upsert: true }
    );
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update family details
exports.updateFamilyDetails = async (req, res) => {
  try {
    const { fatherName, fatherProfession } = req.body;
    const profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { fatherName, fatherProfession },
      { new: true, upsert: true }
    );
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update religion
exports.updateReligion = async (req, res) => {
  try {
    const { religion } = req.body;
    const profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { religion },
      { new: true, upsert: true }
    );
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get profile by slug
exports.getProfileBySlug = async (req, res) => {
  try {
    const profile = await Profile.findOne({ slug: req.params.slug })
      .populate('user', 'name email');
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get my profile
exports.getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id })
      .populate('user', 'name email');
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update profile
exports.updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      req.body,
      { new: true, upsert: true }
    );
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add photos
exports.addPhotos = async (req, res) => {
  try {
    const { photos } = req.body; // Expecting array of {url, isProfile}
    
    const profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { $push: { photos: { $each: photos } } },
      { new: true, upsert: true }
    );
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add videos
exports.addVideos = async (req, res) => {
  try {
    const { videos } = req.body; // Expecting array of {url, thumbnail}
    
    const profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { $push: { videos: { $each: videos } } },
      { new: true, upsert: true }
    );
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 