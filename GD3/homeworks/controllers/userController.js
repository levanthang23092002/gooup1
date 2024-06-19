const User = require('../services/connect');
const permission = require('../middlewares/checkPermission')
const jwt = require('jsonwebtoken');
const sendEmail = require('../controllers/emailController')




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
exports.getHotel = (req, res) => {
  const idHotel = req.params.id;

  User.getHotel(idHotel, (error, results) => {
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
exports.updateHotel = (req, res) => {
  const idHotel = req.params.id;
  const { name, address, email, phone, description, status } = req.body;

  const values = [name, address, email, phone, description, status]

  User.updateHotel(idHotel, values, (error, results) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Lỗi Hệ Thống',
        data: req.body,
        error_code: error
      });
    } else {
      if (results === "Not Found") {
        res.status(404).json({
          success: false,
          message: "Không Tìm Thấy",
          data: {},
          error_code: ''
        });
      } else {
        if (results === 1) {
          res.status(401).json({
            success: false,
            message: 'KHách Sạn Đã Bị Xóa',
            data: null,
            error_code: ''
          });
        } else {
          res.status(200).json({
            success: true,
            message: 'Thành công',
            data: values,
            error_code: ''
          });
        }
      }
    }
  });
};
exports.deleteHotel = (req, res) => {
  const idHotel = req.params.id;

  User.deleteHotel(idHotel, (error, results) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        data: {},
        error_code: error
      });
    } else {

      if (results === 0) {
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

exports.getalladmin = (req, res) => {
  User.getallAdmin((error, results) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        data: {},
        error_code: error
      });
    } else {
      if (results === 0) {
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

exports.getAdmin = (req, res) => {
  const userId = req.params.id;
  User.getAdmin(userId, (error, results) => {
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

exports.updateAdmin = (req, res) => {
  const idHotel = req.params.id;
  const { name, phone, address, email, role } = req.body;

  const values = [name, phone, address, email, role]

  User.updateAdmin(idHotel, values, (error, results) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        data: req.body,
        error_code: error
      });
    } else {
      if (results === 0) {
        res.status(404).json({
          success: false,
          message: 'Admin not found',
          data: req.body,
          error_code: ''
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'Successfully updated Addmin',
          data: values,
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
exports.addRoom = (req, res) => {
  // Extract user data from request body
  const { name, area, type, status, price, idhotel, floor } = req.body;
  const roomData = ['seq_rooms_id', name, area, type, status, price, idhotel, floor]
  console.log(roomData)
  // Perform registration logic
  // Example: Assuming you have a register function in your User module
  User.addRoom(roomData, (error, result) => {
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
exports.approveRoom = (req, res) => {
  const idRoom = req.params.id;
  User.proveRoom(idRoom, (error, results) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        data: req.body,
        error_code: error
      });
    } else {
      if (results === 0) {
        res.status(404).json({
          success: false,
          message: 'room not found',
          data: req.body,
          error_code: ''
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'Successfully updated hotel',
          data: {},
          error_code: ''
        });
      }
    }
  });
};
exports.bookRoom = (req, res) => {
  const idroom = req.params.id;
  const authtoken = req.headers['authorization'];
  const token = authtoken.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);



  const checkin = permission.getdaytime();
  console.log(checkin);

  const roomData = ['seq_reser_id', decoded?.user.iduser, checkin, idroom]
  console.log(roomData)
  // Perform registration logic
  // Example: Assuming you have a register function in your User module
  User.bookRoom(roomData, (error, result) => {
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
          message: 'No found',
          data: {},
          error_code: ''
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'Thành công',
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
        message: "Lỗi Hệ Thống",
        data: {},
        error_code: error
      });
    } else {
      if (results.length === 0) {
        res.status(404).json({
          success: false,
          message: "Not Found",
          data: {},
          error_code: ''
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'Thành công',
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
        message: "Lỗi Hệ Thống",
        data: {},
        error_code: error
      });
    } else {
      if (results.length === 0) {
        res.status(404).json({
          success: false,
          message: "Not Found",
          data: {},
          error_code: ''
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Thành công",
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
        message: "Lỗi Hệ Thống",
        data: {},
        error_code: error
      });
    } else {
      if (results.length === 0) {
        res.status(404).json({
          success: false,
          message: "Not Found",
          data: {},
          error_code: ''
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Thành công",
          data: results,
          error_code: ''
        });
      }
    }
  })
}
exports.login = (req, res) => {
  // Extract user credentials from request body
  const { email, password } = req.body;

  // Perform login logic
  User.login({ email, password }, (error, result) => {
    if (error) {
      return res.status(500).json({
        success: false,
        message: 'Lỗi Hệ Thống',
        error: error
      });
    } else if (result === 0) {
      return res.status(401).json({
        success: false,
        message: 'Không Tìm Thấy Tài Khoản Này',
        error: ''
      });
    } else {
      if (result === 1) {
        return res.status(402).json({
          success: false,
          message: 'Cần Điền Đủ Thông Tin',
          error: ''
        });
      } else {
        return res.status(200).json({
          success: true,
          message: 'User logged in successfully',
          data: result
        });
      }

    }
  });
};
exports.register = (req, res) => {
  // Extract user data from request body
  const { name, phone, address, email, password } = req.body;
  const data = ['seq_MyCustom_Id', name, phone, address, email, password, 'USER']

  // Perform registration logic
  // Example: Assuming you have a register function in your User module
  User.register(data, (error, result) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error
      });
    } else
      if (result === 1) {
        res.status(401).json({
          success: false,
          message: "Email Đã Tồn Tại",
          data: {}
        });
      } else {
        sendEmail.sendEmail(data);
        res.status(200).json({
          success: true,
          message: 'Đăng kí thành công',
          data: result
        });
      }
  });
};

