
const recommendationService = require('../services/recommendationService');

exports.getRecommendations = async (req, res) => {
  try {
    const recommendations = await recommendationService.getRecommendations(req.user.userId);
    res.json(recommendations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};