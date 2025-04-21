const express = require('express');
const router = express.Router();
const celebrityController = require('../controllers/celebrityController');


router.post('/', celebrityController.createCelebrity);
router.get('/:id', celebrityController.getCelebrityProfile);

module.exports = router;
