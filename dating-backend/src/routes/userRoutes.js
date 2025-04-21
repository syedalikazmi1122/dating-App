const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userContoller');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/auth/signup', userController.register);
router.post('/auth/login', userController.login);
router.put('/profile', authMiddleware, userController.updateProfile);
router.post('/addStory',authMiddleware,userController.addStory);
router.delete('/deleteStory/:id',authMiddleware,userController.deleteStory);
router.get('/getStory/:id',authMiddleware,userController.getStory);

module.exports = router;