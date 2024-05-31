import express, { Request, Response } from 'express';
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello GooUp1 💕');
});

app.listen(port, () => {
    console.log(`Server đang lắng nghe tại http://localhost:${port}`)
});