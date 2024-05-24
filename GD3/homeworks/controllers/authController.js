const User = require('../services/connect');
const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  // Extract user data from request body
  const {  name, phone, address, email, password } = req.body;
  const idUser ='seq_MyCustom_Id' ;
  // Perform registration logic
  // Example: Assuming you have a register function in your User module
  User.register({idUser , name, phone, address, email, password }, (error, result) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'User registered successfully',
        data: result
      });
    }
  });
};


exports.login = (req, res) => {
  // Extract user credentials from request body
  const { email, password } = req.body;

  // Perform login logic
  User.login({ email, password }, (error, result) => {
    if (error) {
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error
      });
    } else if (!result) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
        error: ''
      });
    } else {
      return res.status(200).json({
        success: true,
        message: 'User logged in successfully',
        data: result
      });
    }
  });
};
exports.loginpassport = (req, res) => {
  // Extract user credentials from request body
  const { email, password } = req.body;

  // Perform login logic
  passport.authenticate('local', { session: false }, (error, result) => {
    if (error) {
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error
      });
    } else if (!result) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
        error: ''
      });
    } else {
      return res.status(200).json({
        success: true,
        message: 'User logged in successfully',
        data: result
      });
    }
  })(req, res);
};



exports.verifyToken = (req, res, next) => {
  const authtoken = req.headers['authorization'];
  const token = authtoken.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token Không Tồn Tại' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token Ko đúng' });
    }


    next();
  });
  
};
