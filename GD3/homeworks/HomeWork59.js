require('dotenv').config();
const { name } = require('ejs');
const express = require('express');
const app = express();
const  http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);
app.use(express.json())
app.use(express.static('public'));
app.set("view engine",'ejs');
app.set("views",'views')

io.on('connection', (client) => {
    console.log('Có kết nối mới:');
    
    // Xử lý sự kiện nhận dữ liệu từ client
    client.on('join', (data) => {
      room = data[1];
    
      console.log(data)
      client.join(room)

    });
    client.on('message',function(data){
       console.log(data)
        io.to(room).emit('thread',data);
    })
  
    // Xử lý sự kiện khi client ngắt kết nối
  
  });
app.get('/chat',(req,res)=>{
    return  res.render("chat.ejs")
})
const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server đang lắng nghe tại http://localhost:${port}`)
    
  
  });





// Xử lý sự kiện khi có kết nối mới


// Khởi động server
