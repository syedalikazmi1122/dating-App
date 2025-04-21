const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

// Route to view all users
router.get('/users', adminController.viewAllUsers);

// Route to approve a user account
router.post('/users/:id/approve', adminController.approveUserAccount);

// Route to view a single user
router.get('/users/:id', adminController.viewSingleUser);

module.exports = router;