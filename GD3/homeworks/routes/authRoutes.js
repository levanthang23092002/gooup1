const authCotroller = require("../controllers/authController");
const passport = require('passport')
const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get('/google',
  passport.authenticate('google', { scope:[ 'profile','email' ],session: false }
));

router.get( '/google/callback',(req,res,next)=>{
    passport.authenticate( 'google',(err,profile,accessToken)=>{
        req.user =profile;
        req.token = accessToken;
        next();

    })(req,res,next)
},(req,res)=>{
    res.redirect(`${process.env.url}/login`)}
);



router.get('/login',(req, res)=>{
    res.send("login success");
})
router.get('/login-success',authCotroller.loginSuccess)

module.exports = router