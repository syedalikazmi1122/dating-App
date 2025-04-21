const Celebrity = require('../models/Celebrity');

const createCelebrity = async (req, res) => {
  try {
    const celebrity = new Celebrity(req.body);
    await celebrity.save();
    res.status(201).json(celebrity);
  } catch (error) {
    res.status(500).json({ message: "Error creating celebrity", error });
  }
};

const getCelebrityProfile = async (req, res) => {
  try {
    const celebrity = await Celebrity.findById(req.params.id);
    if (!celebrity) return res.status(404).json({ message: "Celebrity not found" });
    res.status(200).json(celebrity);
  } catch (error) {
    res.status(500).json({ message: "Error fetching celebrity profile", error });
  }
};

module.exports = {
  createCelebrity,
  getCelebrityProfile
};