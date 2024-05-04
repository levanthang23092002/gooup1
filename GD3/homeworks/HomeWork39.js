const express = require('express');
const { Pool } = require('pg');

const app = express();


// Cấu hình kết nối PostgreSQL
const pool = new Pool({
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    port: '5432',
    database: 'hotel_booking_system',
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

app.get('/users', (req, res) => {
    pool.query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(result.rows);
    });
});
connectToPostgreSQL()

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});