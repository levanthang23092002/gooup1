// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authtoken = req.headers['authorization'];
  let token;
  if (!authtoken) {
    return res.status(401).json({ message: 'Missing token' });
  } else {
    token = authtoken.split(' ')[1];
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Cung cấp thông tin người dùng được xác thực cho các middleware hoặc controller khác, nếu cần
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;