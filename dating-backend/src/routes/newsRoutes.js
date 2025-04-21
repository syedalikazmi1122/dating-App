const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');


router.post('/', authMiddleware, adminMiddleware, newsController.addNewsArticle);

router.get('/', newsController.getAllNews);

router.get('/:id', newsController.getNewsById);

router.put('/:id', authMiddleware, adminMiddleware, newsController.updateNewsArticle);

router.delete('/:id', authMiddleware, adminMiddleware, newsController.deleteNewsArticle);

module.exports = router;
