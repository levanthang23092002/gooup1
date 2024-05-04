require('dotenv').config();
const express = require('express');

const auth = require('./routes/auth');
const user = require('./routes/apiRoutes');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const corsOptions = {
  origin: '*', // Chỉ cho phép truy cập từ tất cả các nguồn 
  methods: ['GET', 'POST'], // Chỉ cho phép các phương thức GET và POST
  allowedHeaders: ['Content-Type', 'Authorization'], // Chỉ cho phép các header Content-Type và Authorization
}

// app.use(cors(corsOptions));
app.use(helmet());
app.use('/auth', auth);

app.use('/users',user);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});
