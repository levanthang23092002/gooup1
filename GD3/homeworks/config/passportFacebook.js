require('dotenv').config();
const passport = require('passport');
const pool = require('../services/db')
const facebookStrategy = require('passport-facebook').Strategy;
const jwt = require('jsonwebtoken');




passport.use(new facebookStrategy({
    clientID: process.env.Facebook_CLIENT_ID,
    clientSecret: process.env.Facebook_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/api/auth/facebook/callback",
    passReqToCallback: true,
    profileFields: ['id', 'name', 'email', 'displayName']
},
    async function (request, accessToken, refreshToken, profile, done) {
        // thêm user vào db



        if (profile?._json?.email) {
            try {
                const type = 'fb';
                const client = await pool.connect();
                const result = await client.query('SELECT * FROM users WHERE email = $1 AND type = $2', [profile?._json?.email, type]);
                client.release();
                const token = jwt.sign({ user: [profile?._json] }, process.env.JWT_SECRET);

                if (result.rows.length > 0) {
                    const user = result.rows[0];
                    console.log(token);

                    done(null, profile, token);
                } else {
                    const registerClient = await pool.connect();
                    const registerResult = await registerClient.query('INSERT INTO users (idUser, name, phone, address, email, password,type) VALUES (NEXTVAL($1), $2, $3, $4, $5, $6,$7)', ['seq_MyCustom_Id', profile?._json.name, null, 'Việt Nam', profile?._json.email, null, type]);

                    registerClient.release();
                    console.log(token);
                    done(null, profile, token);
                }
            } catch (error) {
                console.error('Error executing query:', error);
                return done(error, null);
            }
        }

    }
));