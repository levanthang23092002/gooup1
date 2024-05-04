require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/authRoutes');
const user = require('./routes/apiRoutes');
const swagger = require('./swagger');
require('./model/passport');

const corsOptions = {
    origin: '*', // Chỉ cho phép truy cập từ tất cả các nguồn 
    methods: ['GET', 'POST'], // Chỉ cho phép các phương thức GET và POST
    allowedHeaders: ['Content-Type', 'Authorization'], // Chỉ cho phép các header Content-Type và Authorization
  }

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
// connectToPostgreSQL();

app.use('/api/auth',authRouter)
app.use('/api',user);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`)
  swagger(app, port)

});