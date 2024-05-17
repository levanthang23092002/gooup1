"use strict";
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const path = require('path');
const swagger = require('./config/swagger');
const Redis = require('ioredis');
const user = require('./routes/auth')


const app = express();
app.use(express.json());



const redisClient = new Redis();

// Sử dụng client Redis
redisClient.on('connect', () => {
  console.log('Kết nối thành công đến Redis');
});

redisClient.on('error', (error) => {
  console.error('Lỗi kết nối đến Redis:', error);
});

function checkCache(req, res, next) {
  const cacheKey = req.originalUrl;

  // Kiểm tra xem dữ liệu đã được lưu trong Redis chưa
  redisClient.get(cacheKey, (error, data) => {
    if (error) {
      console.error('Lỗi khi truy xuất cache:', error);
      next();
    }

    if (data !== null) {
      // Nếu dữ liệu đã tồn tại trong cache, trả về dữ liệu từ cache
      res.send(JSON.parse(data));
    } else {
      // Nếu dữ liệu chưa tồn tại trong cache, tiếp tục xử lý yêu cầu
      next();
    }
  });
}



app.use('/',checkCache, user);
const port = process.env.PORT || 5000;
app.use('/test',async(req, res)=>{
    res.send({id:1 ,name: 'thắng'})
  })
app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`)
  swagger(app, port)

});
process.on('SIGINT', () => {
    redisClient.quit();
    process.exit();
  });