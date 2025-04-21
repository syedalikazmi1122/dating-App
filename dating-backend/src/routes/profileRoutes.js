const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');

// Profile completion flow routes
router.post('/name', authMiddleware, profileController.updateName);
router.post('/age', authMiddleware, profileController.updateAge);
router.post('/gender', authMiddleware, profileController.updateGender);
router.post('/looking-for', authMiddleware, profileController.updateLookingFor);
router.post('/interests', authMiddleware, profileController.updateInterests);
router.post('/photos', authMiddleware, profileController.addPhotos);
router.post('/videos', authMiddleware, profileController.addVideos);
router.post('/location', authMiddleware, profileController.updateLocation);
router.post('/family', authMiddleware, profileController.updateFamilyDetails);
router.post('/religion', authMiddleware, profileController.updateReligion);

// Get profile details
router.get('/:slug', profileController.getProfileBySlug);
router.get('/me', authMiddleware, profileController.getMyProfile);

// Update profile
router.put('/', authMiddleware, profileController.updateProfile);

module.exports = router; 