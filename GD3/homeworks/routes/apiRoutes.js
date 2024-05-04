// // routes/apiRoutes.js
// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');
// const authController = require('../controllers/authController');

// router.get('/Hotel', userController.getAllHotel);
// router.get('/Room', userController.getAllRoom);

// router.get('/user/:id',authController.verifyToken, userController.getUser);
// router.get('/user/:id/AllRoomBooking', userController.getAllRoomBooking);
// router.get('/RoomBooking/:id', userController.getRoomBooking);
// router.get('/AllEvaluate', userController.getAllEvaluate);
// // Định nghĩa các route API khác ở đây


// module.exports = router;


// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../controllers/verifyToken')





// Định nghĩa các route API khác ở đây



/**
 * @openapi
 * '/api/hotel':
 *  get:
 *     tags:
 *     - Get All Hotels
 *     summary: Get all hotels
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Unauthorized 
 */

router.get('/hotel',verifyToken, userController.getAllHotel);
// router.get('/Hotel',verifyToken.verifyToken, userController.getAllHotel);

/**
 * @openapi
 * '/api/room':
 *  get:
 *     tags:
 *     - Get All Room
 *     summary: Get all Room
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request 
 */

router.get('/room', verifyToken,userController.getAllRoom)

/**
 * @openapi
 * '/api/user/{id}':
 *  get:
 *     tags:
 *     - Get User
 *     summary: Get user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the User
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request 
 */

router.get('/user/:id', userController.getUser)

/**
 * @openapi
 * '/api/user/{id}/AllRoomBooking':
 *  get:
 *     tags:
 *     - Get All Room Booking
 *     summary: Get All Room Booking
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the User
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request 
 */

router.get('/user/:id/AllRoomBooking', userController.getAllRoomBooking)
/**
 * @openapi
 * '/api/roombooking/{id}':
 *  get:
 *     tags:
 *     - Room Booking
 *     summary: Get room booking
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the room booking
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request 
 */
router.get('/roombooking/:id', userController.getRoomBooking);

/**
 * @openapi
 * '/api/AllEvaluate':
 *  get:
 *     tags:
 *     - All Evaluate
 *     summary: All Evaluate
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request 
 */

router.get('/AllEvaluate', userController.getAllEvaluate)

module.exports = router;



