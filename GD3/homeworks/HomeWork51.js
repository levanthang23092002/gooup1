require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const users = require('./routes/auth');
const authRouter = require('./routes/authRoutes');
const user = require('./routes/swaggerRoutes');
const path = require('path'); 
const swagger = require('./config/swagger');
require('./config/passportFacebook');
require('./config/passportGoogle');
const i18n = require('i18n');

i18n.configure({
  locales: ['en', 'vi'],
  directory: path.join(__dirname, '/translation'),
  defaultLocale: 'vi',
  queryParameter: 'lang', // Sử dụng tham số query để thiết lập ngôn ngữ
});
const corsOptions = {
  origin: '*', // Chỉ cho phép truy cập từ tất cả các nguồn 
  methods: ['GET', 'POST','PUT', 'DELETE'], // Chỉ cho phép các phương thức GET và POST
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
app.use(i18n.init);


app.use((req, res, next) => {
  const lang = req.query.lang;
  if (lang) {
    i18n.setLocale(req, lang);
  }
  next();
});
app.use('/api/auth', authRouter)
app.use('/api', user);
app.use('/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`)
  swagger(app, port)

});