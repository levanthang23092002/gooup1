require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const user = require('./routes/uploadRouter');
const app = express();


const corsOptions = {
    origin: '*', // Chỉ cho phép truy cập từ tất cả các nguồn 
    methods: ['GET', 'POST'], // Chỉ cho phép các phương thức GET và POST
    allowedHeaders: ['Content-Type', 'Authorization'], // Chỉ cho phép các header Content-Type và Authorization
}

app.use(express.json());
app.use(cors(corsOptions));
app.use('/api',user);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`)
});