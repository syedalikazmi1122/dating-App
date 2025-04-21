const express = require('express');
const router = express.Router();
const communityController = require('../controllers/discussionController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/', authMiddleware, communityController.createDiscussion);
router.get('/:category', communityController.getDiscussionsByCategory);

module.exports = router;
