
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../config/verifyToken')
const permission = require('../middlewares/checkPermission')



/**
 * @openapi
 * '/api/allhotel':
 *  get:
 *     tags:
 *     - Hotel
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

router.get('/allhotel' ,permission.permission(['ADMIN','SUPAD']),userController.getAllHotel);
// router.get('/Hotel',verifyToken.verifyToken, userController.getAllHotel);

/**
 * @openapi
 * '/api/hotel/{id}':
 *  get:
 *     tags:
 *     - Hotel
 *     summary: Get hotel by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the hotel
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
router.get('/hotel/:id',permission.permission(['ADMIN','SUPAD']), userController.getHotel);

/**
 * @openapi
 * /api/updatehotel/{id}:
 *   put:
 *     tags:
 *       - Hotel
 *     summary: Update hotel by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the hotel
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *       '400':
 *         description: Unauthorized
 */
router.put('/updateHotel/:id', permission.permission(['ADMIN','SUPAD']), userController.updateHotel);
/**
 * @openapi
 * '/api/deletehotel/{id}':
 *  delete:
 *     tags:
 *     - Hotel
 *     summary: Get hotel by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the hotel
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
router.delete('/deletehotel/:id',permission.permission(['ADMIN','SUPAD']), userController.deleteHotel);

/**
 * @openapi
 * '/api/allAdmin':
 *  get:
 *     tags:
 *     - ADMIN
 *     summary: Get all admin
 *    
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

router.get('/allAdmin', permission.permission(['SUPAD']),userController.getalladmin)

/**
 * @openapi
 * '/api/admin/{id}':
 *  get:
 *     tags:
 *     - ADMIN
 *     summary: Get admin
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the admin 
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

router.get('/admin/:id', permission.permission(['SUPAD']),userController.getAdmin)

/**
 * @openapi
 * /api/updateAdmin/{id}:
 *   put:
 *     tags:
 *       - ADMIN
 *     summary: Update admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the admin
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *               
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *       '400':
 *         description: Unauthorized
 */
router.put('/updateAdmin/:id',  permission.permission(['SUPAD']), userController.updateAdmin);

/**
 * @openapi
 * /api/addroom:
 *   post:
 *     tags:
 *       - Room
 *     summary: add room by user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               area:
 *                 type: string
 *               type:
 *                 type: string
 *               status:
 *                 type: string
 *               price:
 *                 type: string
 *               idhotel:
 *                 type: string
 *               floor:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *       '400':
 *         description: Unauthorized
 */
router.post('/addroom', permission.permission(['USER']),  userController.addRoom);

/**
 * @openapi
 * /api/approveRoom/{id}:
 *   put:
 *     tags:
 *       - Room
 *     summary: approve room by Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the admin
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *       '400':
 *         description: Unauthorized
 */
router.put('/approveRoom/:id',  permission.permission(['ADMIN']),  userController.approveRoom);

/**
 * @openapi
 * /api/bookingRoom/{id}:
 *   post:
 *     tags:
 *       - Room
 *     summary: booking room by user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the admin
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *       '400':
 *         description: Unauthorized
 */
router.post('/bookingRoom/:id',  permission.permission(['USER']),  userController.bookRoom);

/**
 * @openapi
 * /api/register:
 *   post:
 *     tags:
 *       - Register
 *     summary: đăng kí email
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *       '400':
 *         description: Unauthorized
 */
router.post('/register',  userController.register);
/**
 * @openapi
 * '/api/room':
 *  get:
 *     tags:
 *     - User
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


router.get('/room', userController.getAllRoom)

/**
 * @openapi
 * '/api/user/{id}':
 *  get:
 *     tags:
 *     - User
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
 *     - User
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
 *     - User
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
 *     - User
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



