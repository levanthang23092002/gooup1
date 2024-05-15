const verifyToken = require('..//config/verifyToken');

exports.permission = (roles) => {
    return async (req, res, next) => {
      try {
        verifyToken(req, res, () => {
          const decoded = req.user;
          if (!roles.includes(decoded.user.role)) {
            return res.status(400).json({ message: 'Bạn không có permission' });
          }
          next();
        });
      } catch (error) {
        // Xử lý lỗi nếu có
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    };
  };

exports.getdaytime= ()=>{
  const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const seconds = String(currentDate.getSeconds()).padStart(2, '0');

const formattedDateTime = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;

return formattedDateTime;
}