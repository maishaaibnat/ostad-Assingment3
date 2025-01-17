const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access Denied. No token provided.');

  try {
    const verified = jwt.verify(token, 'secretKey');
    req.user = verified;
    next(); // Move to the next middleware or route handler
  } catch (err) {
    res.status(400).send('Invalid Token.');
  }
};

module.exports = authMiddleware;
