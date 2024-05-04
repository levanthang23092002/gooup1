// Tạo database hotel_management_system
(phi thường hoá): Đây là kỹ thuật phổ biến trong CSDL NoSQL để tối ưu hóa truy vấn.
 Thay vì duy trì các mối quan hệ và khóa ngoại giữa các bảng như trong CSDL SQL, 
 dữ liệu trong CSDL NoSQL thường được tổ chức sao cho các truy vấn cụ thể được thực hiện một cách hiệu quả. 
 Điều này có thể bao gồm việc nhúng dữ liệu, sao chép dữ liệu hoặc sử dụng cấu trúc dữ liệu phù hợp cho mỗi truy vấn.
use hotel_management_system;

// Tạo collection users
db.createCollection("users");
db.users.insertMany([
  { idUser: 1, name: 'Nguyễn Văn A', phone: '1234567890', address: '123 Đường ABC', email: 'nguyenvana@example.com', password: 'password123' },
  { idUser: 2, name: 'Trần Thị B', phone: '9876543210', address: '456 Đường XYZ', email: 'tranthib@example.com', password: 'pass123' }
]);

// Tạo collection hotels
db.createCollection("hotels");
db.hotels.insertMany([
  { idHotel: 1, idOwner: 1, name: 'Khách sạn A', address: '123 Đường ABC', email: 'hotela@example.com', phone: '1234567890', description: 'Khách sạn sang trọng', status: true },
  { idHotel: 2, idOwner: 1, name: 'Khách sạn B', address: '456 Đường XYZ', email: 'hotelb@example.com', phone: '9876543210', description: 'Khách sạn nhỏ xinh', status: true }
]);

// Tạo collection rooms
db.createCollection("rooms");
db.rooms.insertMany([
  { idRoom: 1, name: 'Phòng 101', area: '30 m2', type: 'Tiêu chuẩn', status: 'Còn trống', price: NumberDecimal("100.00"), idHotel: 1, floor: '1' },
  { idRoom: 2, name: 'Phòng 201', area: '40 m2', type: 'Deluxe', status: 'Còn trống', price: NumberDecimal("150.00"), idHotel: 1, floor: '2' }
]);

// Tạo collection evaluate
db.createCollection("evaluate");
db.evaluate.insertMany([
  { idEvaluate: 1, idUser: 2, idHotel: 1, description: 'Khách sạn rất tuyệt vời', star: 5 },
  { idEvaluate: 2, idUser: 1, idHotel: 2, description: 'Dịch vụ tốt, phòng sạch sẽ', star: 4 }
]);

// Tạo collection reservations
db.createCollection("reservations");
db.reservations.insertMany([
  { idReser: 1, idUser: 1, checkin: ISODate('2024-03-10'), checkout: ISODate('2024-03-15'), idRoom: 1 },
  { idReser: 2, idUser: 2, checkin: ISODate('2024-03-12'), checkout: ISODate('2024-03-14'), idRoom: 2 }
]);

// Truy vấn dữ liệu từ các collection 
db.users.find();
db.hotels.find();
db.rooms.find();
db.reservations.find();
db.evaluate.find();