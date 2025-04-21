const express = require('express');
const router = express.Router();
const communityController = require('../controllers/recommendationController');
const authMiddleware = require('../middleware/authMiddleware');


router.get('/',communityController.getRecommendations);