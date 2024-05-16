const Redis = require('ioredis');

// Tạo một đối tượng Redis Client
const redisClient = new Redis();

// Gửi một lệnh Redis
redisClient.set('myKey', 'myValue');

// Nhận giá trị từ Redis
redisClient.get('myKey', (err, result) => {
  console.log(result); // In ra 'myValue'
});

// Đóng kết nối Redis
redisClient.quit();