module.exports = (req, res, next) => {
  console.log(req.user);
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ error: 'Access denied. Admin only.' });
  }
  next();
};