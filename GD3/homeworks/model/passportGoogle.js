require('dotenv').config();
const passport = require('passport');
const pool = require('../config/db')
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const jwt = require('jsonwebtoken');



passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/api/auth/google/callback",
    passReqToCallback: true
},
    async function (request, accessToken, refreshToken, profile, done) {
        // thêm user vào db

        if (profile?.email) {
            try {
                const type ='gg'
                const client = await pool.connect();
                const result = await client.query('SELECT * FROM users WHERE email = $1 AND type = $2', [profile.email,type]);
                client.release();
                const token = jwt.sign({ user: [profile?.provider,profile?.id,profile?.displayName,profile?.email,] }, process.env.JWT_SECRET);
                
                if (result.rows.length > 0) {
                    const user = result.rows[0];
                    console.log(token);

                    done(null,profile,token);
                } else {
                    const registerClient = await pool.connect();
                    const registerResult = await registerClient.query('INSERT INTO users (idUser, name, phone, address, email, password, type) VALUES (NEXTVAL($1), $2, $3, $4, $5, $6, $7)', ['seq_MyCustom_Id', profile?.displayName, null, 'việt nam', profile?.email, null,type]);

                    registerClient.release();
                    console.log(token);
                    done(null,profile,token);
                }
            } catch (error) {
                console.error('Error executing query:', error);
                return done(error, null);
            }
        }
       
    }
));