require('dotenv').config();
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const LocalStrategy = require('passport-local').Strategy;


const dbPort = process.env.DB_PORT;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const pool = new Pool({
    user: dbUser,
    password: dbPassword,
    host: dbHost,
    port: dbPort,
    database: dbName,
});

function connectToPostgreSQL() {
    pool.connect((err, client, done) => {
        if (err) {
            console.error('Error connecting to PostgreSQL:', err);
            // Kết nối thất bại, thử kết nối lại sau 5 giây
            setTimeout(connectToPostgreSQL, 5000);
            return;
        }
        console.log('Connected to PostgreSQL');
        done();
    });
}
connectToPostgreSQL()
const User = {
    
    getAllHotel: (callback) => {
        let queryhotel = "SELECT   h.name as hotel, h.address, h.email, h.phone, h.description, h.status , AVG(e.star) as Star FROM hotels AS h RIGHT JOIN evaluate AS e ON e.idHotel = h.idHotel WHERE h.idOwner = 4 GROUP BY e.idUser, h.idHotel, h.name, h.address  order by AVG(e.star) LIMIT 10 OFFSET 0"
        pool.query(queryhotel, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                callback(error, null);
            } else {
                callback(null, results.rows);
            }
        });
    },
    getAllRoom: (callback) => {
        let queryroom = "SELECT r.name, r.type, r.status, r.price, r.floor FROM rooms as r where r.idhotel = 6 and r.type like 'Tiêu chuẩn' order by price LIMIT 10 OFFSET 0 "
        pool.query(queryroom, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                callback(error, null);
            } else {
                callback(null, results.rows);
            }
        });
    },
    getUser: (userId,callback) => {
      
        let queryroom =` SELECT u.name, u.phone, u.address, u.email From users as u where idUser = ${userId}; `
        pool.query(queryroom, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                callback(error, null);
            } else {
                callback(null, results.rows);
            }
        });
    },
    getAllRoomBooking: (userId,callback) => {
        let queryroom = ` SELECT r.name, r.type, r.status, r.price, r.floor FROM rooms as r Left JOIN reservations as re On r.idRoom = re.idRoom where  re.idUser = ${userId} order by re.checkin DESC LIMIT 10 OFFSET 0; `
        pool.query(queryroom, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
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
                console.error('Error executing query:', error);
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
                console.error('Error executing query:', error);
                callback(error, null);
            } else {
                callback(null, results.rows);
            }
        });
    },
    register: async (userData, callback) => {
        const {idUser, name, phone, address, email, password } = userData;
      
        try {
           
          const query = "INSERT INTO users (idUser, name, phone, address, email, password) VALUES ($1, $2, $3, $4, $5, $6)";
          const values = [idUser, name, phone, address, email, password];
      
          pool.query(query, values, (error, results) => {
            if (error) {
              console.error('Error executing query:', error);
              callback(error, null);
            } else {
              callback(null, results.rows);
            }
          });
        } catch (error) {
          console.error('Error hashing password:', error);
          callback(error, null);
        }
      },
      
     

login: (userData, callback) => {
  const { email, password } = userData;
  const query = "SELECT * FROM users WHERE email = $1 and password = $2";
  const values = [email, password];

  pool.query(query, values, (error, results) => {
    if (error) {
      console.error('Lỗi thực thi truy vấn:', error);
      callback(error, null);
    } else {
      if (results.rows.length === 0) {
        const error = 'Thông tin đăng nhập không hợp lệ';
        callback(error, null);
      } else {
        const user = results.rows[0];

        // Tạo mã JWT
        const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '30s' });

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
            console.error('Lỗi thực thi truy vấn:', error);
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