require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const user = require('./routes/swaggerRoutes');
const swagger = require('./config/swagger');
const i18n = require('i18n');
const app = express();

i18n.configure({
  locales: ['en', 'vi'],
  directory: path.join(__dirname, '/translation'),
  defaultLocale: 'vi',
  queryParameter: 'lang', // Sử dụng tham số query để thiết lập ngôn ngữ
});
 
const corsOptions = {
    origin: '*', // Chỉ cho phép truy cập từ tất cả các nguồn 
    methods: ['GET', 'POST'], // Chỉ cho phép các phương thức GET và POST
    allowedHeaders: ['Content-Type', 'Authorization'], // Chỉ cho phép các header Content-Type và Authorization
  }


app.use(express.json());
app.use(cors(corsOptions));
app.use(i18n.init);


app.use((req, res, next) => {
  const lang = req.query.lang;
  if (lang) {
    i18n.setLocale(req, lang);
  }
  next();
});

app.use('/api',user);
app.use('/test',async(req, res)=>{
  res.send({id:1 ,name: res.__('error_message')})
})
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`)
  swagger(app, port)

});