const News = require('../models/News');

const addNewsArticle = async (req, res) => {
    try {
        const article = new News(req.body);
        await article.save();
        res.status(201).json({ message: "Article created successfully", article });
    } catch (error) {
        res.status(500).json({ message: "Error creating article", error });
    }
};
const getAllNews = async (req, res) => {
    try {
        const newsArticles = await News.find().sort({ publicationDate: -1 });
        res.status(200).json(newsArticles);
    } catch (error) {
        res.status(500).json({ message: "Error fetching articles", error });
    }
};
const getNewsById = async (req, res) => {
    try {
        const article = await News.findById(req.params.id);
        if (!article) return res.status(404).json({ message: "Article not found" });
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: "Error fetching article", error });
    }
};

const updateNewsArticle = async (req, res) => {
    try {
        const article = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!article) return res.status(404).json({ message: "Article not found" });
        res.status(200).json({ message: "Article updated successfully", article });
    } catch (error) {
        res.status(500).json({ message: "Error updating article", error });
    }
};

const deleteNewsArticle = async (req, res) => {
    try {
        const article = await News.findByIdAndDelete(req.params.id);
        if (!article) return res.status(404).json({ message: "Article not found" });
        res.status(200).json({ message: "Article deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting article", error });
    }
};

module.exports = {
    addNewsArticle,
    getAllNews,
    getNewsById,
    updateNewsArticle,
    deleteNewsArticle
};