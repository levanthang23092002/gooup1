const express = require('express');
const router = express.Router();
const authCotroller = require("../controllers/authController");
const userController = require('../controllers/userController');
const permission = require('../middlewares/checkPermission')
const pool = require('../services/db')
const Redis = require('ioredis');

const redisClient = new Redis();

// Sử dụng client Redis
redisClient.on('connect', () => {
  console.log('Kết nối thành công đến Redis');
});

redisClient.on('error', (error) => {
  console.error('Lỗi kết nối đến Redis:', error);
});

router.get('/Hotel', permission.permission(['USER','ADMIN']),userController.getAllHotel);
router.get('/Room', userController.getAllRoom);
router.get('/user/:id',authCotroller.verifyToken, userController.getUser);
router.get('/user/:id/AllRoomBooking', userController.getAllRoomBooking);
router.get('/RoomBooking/:id', userController.getRoomBooking);
router.get('/AllEvaluate', userController.getAllEvaluate);

router.post("/register", authCotroller.register);
router.post("/login", authCotroller.login)
router.post("/loginpassport", authCotroller.loginpassport)

router.get('/hotels/:idhotel',(req, res, next) =>{
    const cacheKey = req.originalUrl;
    let idhotel = req.params.idhotel; // Lấy idhotel từ query params
  console.log(idhotel)
    let queryhotel = `SELECT  DISTINCT h.name , h.address, h.email, h.phone, h.description, h.status , AVG(e.star) as Star FROM hotels AS h RIGHT JOIN evaluate AS e ON e.idHotel = h.idHotel WHERE h.idhotel = ${idhotel} GROUP BY e.idUser, h.idHotel, h.name, h.address Having h.delete is not true  order by AVG(e.star)`;
  
    pool.query(queryhotel, (error, results) => {
      if (error) {
        console.error('Lỗi khi truy vấn cơ sở dữ liệu:', error);
        next();
      } else {
        const responseData = { data: results };
        redisClient.setex(cacheKey, 60, JSON.stringify(responseData));
        res.send(responseData);
      }
    });
  } );
  process.on('SIGINT', () => {
    redisClient.quit();
    process.exit();
  });

module.exports = router;