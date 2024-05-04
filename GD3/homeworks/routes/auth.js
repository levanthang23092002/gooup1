const authCotroller = require("../controllers/authController");
const express = require('express');
const router = express.Router();


router.post("/register", authCotroller.register);
router.post("/login", authCotroller.login)
router.post("/loginpassport", authCotroller.loginpassport)

module.exports = router;