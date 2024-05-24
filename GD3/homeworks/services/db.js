require('dotenv').config();
const { Pool } = require('pg');

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


module.exports = pool;