const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
  });
// Khởi chạy server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server đang lắng nghe tại http://localhost:${port}`);

});