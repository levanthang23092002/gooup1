const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');

app.use('/api', apiRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});