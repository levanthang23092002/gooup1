const User = require('../model/connect');

exports.getAllHotel = (req, res) => {
  User.getAllHotel((error, results) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        data: {},
        error_code: error
      });
    } else {
      if (results.length === 0) {
        res.status(404).json({
          success: false,
          message: 'No hotels found',
          data: {},
          error_code: ''
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'Successfully retrieved hotels',
          data: results,
          error_code: ''
        });
      }
    }
  });
};

exports.getAllRoom = (req, res) => {
  User.getAllRoom((error, results) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        data: {},
        error_code: error
      });
    } else {
      if (results.length === 0) {
        res.status(404).json({
          success: false,
          message: 'No rooms found',
          data: {},
          error_code: ''
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'Successfully retrieved rooms',
          data: results,
          error_code: ''
        });
      }
    }
  });
};

exports.getUser = (req, res) => {
  const userId = req.params.id;

  User.getUser(userId, (error, results) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        data: {},
        error_code: error
      });
    } else {
      if (results.length === 0) {
        res.status(404).json({
          success: false,
          message: 'User not found',
          data: {},
          error_code: ''
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'Successfully retrieved user',
          data: results,
          error_code: ''
        });
      }
    }
  });
};

exports.getAllRoomBooking = (req, res) => {
  const userId = req.params.id;
  User.getAllRoomBooking(userId, (error, results) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        data: {},
        error_code: error
      });
    } else {
      if (results.length === 0) {
        res.status(404).json({
          success: false,
          message: 'No room bookings found',
          data: {},
          error_code: ''
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'Successfully retrieved room bookings',
          data: results,
          error_code: ''
        });
      }
    }
  });
};

exports.getRoomBooking = (req, res) => {
  const roomId = req.params.id;
  User.getRoomBooking(roomId, (error, results) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        data: {},
        error_code: error
      });
    } else {
      if (results.length === 0) {
        res.status(404).json({
          success: false,
          message: 'Room booking not found',
          data: {},
          error_code: ''
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'Successfully retrieved room booking',
          data: results,
          error_code: ''
        });
      }
    }
  });
};

exports.getAllEvaluate = (req, res) => {
  User.getAllEvaluate((error, results) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        data: {},
        error_code: error
      });
    } else {
      if (results.length === 0) {
        res.status(404).json({
          success: false,
          message: 'No evaluations found',
          data: {},
          error_code: ''
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'Successfully retrieved evaluations',
          data: results,
          error_code: ''
        })
      }
    }
  })
}