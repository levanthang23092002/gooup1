
const passport = require('passport')
const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get('/google',passport.authenticate('google', { scope: ['profile', 'email'], session: false }));
router.get('/google/callback', (req, res, next) => {
    passport.authenticate('google', (err, profile, accessToken) => {
        req.user = profile;
        req.token = accessToken;
        next();

    })(req, res, next)
}, (req, res) => {
    res.redirect(`${process.env.url}/login`)
}
);

router.get('/facebook',passport.authenticate('facebook',{ scope: ['profile', 'email'], session: false}));
router.get('/facebook/callback',
  passport.authenticate('facebook'),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect(`${process.env.url}/login`);
  });

router.get('/login', (req, res) => { res.send("login success"); })


module.exports = router