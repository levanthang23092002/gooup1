const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const pool = require('./config/db'); 

// Khởi tạo ứng dụng Express
const app = express();
app.use(bodyParser.json());
app.use(passport.initialize());

// Cấu hình Passport sử dụng Local Strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    function (email, password, done) {
      // Xác thực email và mật khẩu
      // Triển khai logic xác thực với cơ sở dữ liệu sử dụng đối tượng pool
      pool.query(
        'SELECT * FROM users WHERE email = $1 AND password = $2',
        [email, password],
        (error, results) => {
          if (error) {
            return done(error, false);
          }
          if (results.rows.length > 0) {
            const user = results.rows[0];
            return done(null, user);
          } else {
            return done(null, false, { message: 'Email hoặc mật khẩu không đúng' });
          }
        }
      );
    }
  )
);

// Định nghĩa route đăng nhập
app.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  // Xác thực thành công, tạo và trả về token
  const token = generateToken(req.user);
  res.json({ token: token },);
});

// Hàm tạo token
function generateToken(user) {
  const token = jwt.sign({user }, process.env.JWT_SECRET, {
    expiresIn: '1h', // Thời hạn của token
  });
  return {token, user};
}

// Khởi chạy ứng dụng
app.listen(3000, () => {
  console.log('Server đang lắng nghe trên cổng 3000');
});