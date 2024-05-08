require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

const authRouter = require('./routes/authRoutes');
const user = require('./routes/apiRoutes');
const swagger = require('./swagger');
require('./model/passportFacebook');
require('./model/passportGoogle');

const corsOptions = {
    origin: '*', // Chỉ cho phép truy cập từ tất cả các nguồn 
    methods: ['GET', 'POST'], // Chỉ cho phép các phương thức GET và POST
    allowedHeaders: ['Content-Type', 'Authorization'], // Chỉ cho phép các header Content-Type và Authorization
  }

const app = express();
passport.serializeUser((user, done) => {
  // Tuần tự hóa thông tin người dùng thành một chuỗi
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Giải tuần tự hóa chuỗi thành thông tin người dùng
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
app.use(session({
  secret: process.env.secret,
  resave: false,
  saveUninitialized: false
}));
app.use(express.json());
app.use(cors(corsOptions));
// connectToPostgreSQL();

app.use('/api/auth',authRouter)
app.use('/api',user);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`)
  swagger(app, port)

});