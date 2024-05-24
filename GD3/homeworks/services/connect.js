require('dotenv').config();
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('./db')

const User = {

  getAllHotel: (callback) => {
    let queryhotel = "SELECT  DISTINCT h.name , h.address, h.email, h.phone, h.description, h.status , AVG(e.star) as Star FROM hotels AS h RIGHT JOIN evaluate AS e ON e.idHotel = h.idHotel WHERE h.idOwner is not null GROUP BY e.idUser, h.idHotel, h.name, h.address Having h.delete is not true  order by AVG(e.star) "
    pool.query(queryhotel, (error, results) => {
      if (error) {
        console.log('Error executing query:', error);
        callback(error, null);
      } else {
        callback(null, results.rows);
      }
    });
  },
  getHotel: (idhotel, callback) => {
    let queryhotel = `SELECT  DISTINCT h.name , h.address, h.email, h.phone, h.description, h.status , AVG(e.star) as Star FROM hotels AS h RIGHT JOIN evaluate AS e ON e.idHotel = h.idHotel WHERE h.idhotel =${idhotel} GROUP BY e.idUser, h.idHotel, h.name, h.address Having h.delete is not true  order by AVG(e.star)`
    pool.query(queryhotel, (error, results) => {
      if (error) {
        console.log('Error executing query:', error);
        callback(error, null);
      } else {
        callback(null, results.rows);
      }
    });
  },
  updateHotel: async (idhotel, values, callback) => {
    const checkidhotel = "SELECT * FROM hotels WHERE idhotel = $1 ";
    const checkHotel = await pool.query(checkidhotel, [idhotel]);
    if (checkHotel.rowCount === 0) {
      callback(null, "Not Found");
    } else {
      const queryhotel = `UPDATE hotels SET name = $1, address = $2, email = $3, phone = $4, description = $5, status = $6 WHERE idhotel = ${idhotel} AND delete is not true`;

      pool.query(queryhotel, values, (error, results) => {
        if (error) {
          console.log('Error executing query:', error);
          callback(error, null);
        } else {
          if (results.rowCount === 0) {
            callback(null, 1);
          } else {
            callback(null, results.rows);
          }


        }
      });
    }



  },
  deleteHotel: (idhotel, callback) => {
    const query = `UPDATE hotels SET delete = 'true' WHERE idhotel = ${idhotel}`;
    pool.query(query, (error, results) => {
      if (error) {
        console.log('Error executing query:', error);
        callback(error, null);
      } else {
        callback(null, results.rowCount); // Số hàng bị xóa
      }
        
      
    });
  },
  getallAdmin: (callback) => {

    let query = ` SELECT name, phone, address, email From users where role = 'ADMIN'; `
    pool.query(query, (error, results) => {
      if (error) {
        console.log('Error executing query:', error);
        callback(error, null);
      } else {
        console.log(results.rows)
        callback(null, results.rows);
      }
    });
  },
  getAdmin: (userId, callback) => {

    let query = ` SELECT u.name, u.phone, u.address, u.email From users as u where idUser = ${userId} AND role = 'ADMIN'; `
    pool.query(query, (error, results) => {
      if (error) {
        console.log('Error executing query:', error);
        callback(error, null);
      } else {
        callback(null, results.rows);
      }
    });
  },
  updateAdmin: (idAdmin, values, callback) => {
    const queryhotel = `UPDATE users SET name = $1, phone = $2, address = $3, email = $4, role = $5 WHERE iduser = ${idAdmin}  AND role = 'ADMIN'`;

    pool.query(queryhotel, values, (error, results) => {
      if (error) {
        console.log('Error executing query:', error);
        callback(error, null);
      } else {
        callback(null, results.rowCount);
      }
    });
  },
  getAllRoom: (callback) => {
    let queryroom = "SELECT r.name, r.type, r.status, r.price, r.floor FROM rooms as r where r.idhotel = 6 and r.type like 'Tiêu chuẩn' order by price LIMIT 10 OFFSET 0 "
    pool.query(queryroom, (error, results) => {
      if (error) {
        console.log('Error executing query:', error);
        callback(error, null);
      } else {
        callback(null, results.rows);
      }
    });
  },
  addRoom: async (roomData, callback) => {


    try {
      const query = "INSERT INTO rooms (idroom,name, area,type,status, price, idhotel, floor) VALUES (NEXTVAL($1), $2, $3, $4, $5, $6, $7,$8)";
      pool.query(query, roomData, (error, results) => {
        if (error) {
          console.log('Error executing query:', error);
          callback(error, null);
        } else {
          callback(null, results.rowCount);
        }
      });
    } catch (error) {
      console.log('Error hashing password:', error);
      callback(error, null);
    }
  },
  proveRoom: async (idroom, callback) => {

    try {
      const query = `UPDATE rooms SET approve = true WHERE idroom = ${idroom}`;
      pool.query(query, (error, results) => {
        if (error) {
          console.log('Error executing query:', error);
          callback(error, null);
        } else {
          callback(null, results.rowCount);
        }
      });
    } catch (error) {
      console.log('Error hashing password:', error);
      callback(error, null);
    }
  },
  bookRoom: async (roomData, callback) => {
    try {
      // const checkRoom = "select * From rooms where idroom = $4 And status = 'Còn trống'";
      // pool.query(checkRoom,roomData,(error, results) =>{
      //   if (error) {
      //     console.log('Error executing query:', error);
      //     callback(error, null);
      //   } else {
      //     if(results.length === 0){

      //     }

      //   }
      // })
      const query = "INSERT INTO reservations (idreser,iduser, checkin,idroom) VALUES (NEXTVAL($1), $2, $3, $4)";
      pool.query(query, roomData, (error, results) => {
        if (error) {
          console.log('Error executing query:', error);
          callback(error, null);
        } else {
          callback(null, results.rows);
        }
      });
    } catch (error) {
      console.log('Error hashing password:', error);
      callback(error, null);
    }
  },
  getUser: (userId, callback) => {

    let queryroom = ` SELECT u.name, u.phone, u.address, u.email From users as u where idUser = ${userId}; `
    pool.query(queryroom, (error, results) => {
      if (error) {
        console.log('Error executing query:', error);
        callback(error, null);
      } else {
        callback(null, results.rows);
      }
    });
  },
  getAllRoomBooking: (userId, callback) => {
    let queryroom = ` SELECT r.name, r.type, r.status, r.price, r.floor FROM rooms as r Left JOIN reservations as re On r.idRoom = re.idRoom where  re.idUser = ${userId} order by re.checkin DESC LIMIT 10 OFFSET 0; `
    pool.query(queryroom, (error, results) => {
      if (error) {
        console.log('Error executing query:', error);
        callback(error, null);
      } else {
        callback(null, results.rows);
      }
    });
  },
  getRoomBooking: (roomId, callback) => {
    let queryroom = `SELECT r.name, r.type, r.status, r.price, r.floor FROM rooms as r where  r.idRoom = ${roomId} ;`
    pool.query(queryroom, (error, results) => {
      if (error) {
        console.log('Error executing query:', error);
        callback(error, null);
      } else {
        callback(null, results.rows);
      }
    });
  },
  getAllEvaluate: (callback) => {
    let queryroom = " SELECT h.name , h.email, h.address, e.description as comment , e.star From hotels as h JOIN evaluate as e On h.idHotel = e.idHotel where e.idUser = 1"
    pool.query(queryroom, (error, results) => {
      if (error) {
        console.log('Error executing query:', error);
        callback(error, null);
      } else {
        callback(null, results.rows);
      }
    });
  },
  register: async (userData, callback) => {

    try {
      // Kiểm tra xem email đã tồn tại trong cơ sở dữ liệu chưa
      const checkEmailQuery = "SELECT * FROM users WHERE email = $1 and type is null";
      const checkEmailResult = await pool.query(checkEmailQuery, [userData[4]]);

      if (checkEmailResult.rows.length > 0) {
        callback(null, 1);
        return;
      }
      const query = "INSERT INTO users (idUser, name, phone, address, email, password, role) VALUES (NEXTVAL($1), $2, $3, $4, $5, $6 , $7 )";


      pool.query(query, userData, (error, results) => {
        if (error) {
          console.log('Error executing query:', error);
          callback(error, null);
        } else {
          callback(null, results.rows);
        }
      });
    } catch (error) {
      console.log('Error during registration:', error);
      callback(error, null);
    }
  },


  login: (userData, callback) => {
    const { email, password } = userData;
    const query = "SELECT * FROM users WHERE email = $1 and password = $2";
    const values = [email, password];
    console.log(values)

    pool.query(query, values, (error, results) => {
      if (error) {
        callback(error, null);
      }
      if (values === null || (Array.isArray(values) && values[0] === null || values[1] === null)) {
        callback(null, 1);
      } else {
        if (results.rows.length === 0) {
          console.log("a");
          callback(null, 0);
        } else {
          const user = results.rows[0];

          // Tạo mã JWT
          const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });

          // Gửi mã JWT và thông tin người dùng
          callback(null, { token, user });
        }
      }
    });
  },
  configurePassport: (passport) => {
    passport.use(
      new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
        const query = 'SELECT * FROM users WHERE email = $1 and password = $2';
        const values = [email, password];

        pool.query(query, values, (error, results) => {
          if (error) {
            console.log('Lỗi thực thi truy vấn:', error);
            return done(error);
          }

          if (results.rows.length === 0) {
            const error = 'Thông tin đăng nhập không hợp lệ';
            return done(null, false, { message: error });
          }

          const user = results.rows[0];

          const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '30s' });
          return done(null, { token, user });
        });
      })
    );
  }





};

module.exports = User;