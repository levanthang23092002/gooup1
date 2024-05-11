const express = require('express');
const router = express.Router();
const authCotroller = require("../controllers/authController");
const userController = require('../controllers/userController');
const permission = require('../middlewares/checkPermission')


router.get('/Hotel', permission.permission(['USER','ADMIN']),userController.getAllHotel);
router.get('/Room', userController.getAllRoom);
router.get('/user/:id',authCotroller.verifyToken, userController.getUser);
router.get('/user/:id/AllRoomBooking', userController.getAllRoomBooking);
router.get('/RoomBooking/:id', userController.getRoomBooking);
router.get('/AllEvaluate', userController.getAllEvaluate);

router.post("/register", authCotroller.register);
router.post("/login", authCotroller.login)
router.post("/loginpassport", authCotroller.loginpassport)

module.exports = router;