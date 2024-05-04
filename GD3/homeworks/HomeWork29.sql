CREATE DATABASE hotel_booking_system;

-- Tạo bảng users
CREATE TABLE users (
idUser BIGINT PRIMARY KEY,
name VARCHAR(20),
phone VARCHAR(11),
address VARCHAR(100),
email VARCHAR(50),
password VARCHAR(12)
);

-- Tạo bảng hotels
CREATE TABLE hotels (
idHotel BIGINT PRIMARY KEY,
idOwner BIGINT,
name VARCHAR(20),
address VARCHAR(100),
email VARCHAR(50),
phone VARCHAR(11),
description VARCHAR(100),
status BOOLEAN,
FOREIGN KEY (idOwner) REFERENCES users(idUser)
);

-- Tạo bảng rooms
CREATE TABLE rooms (
idRoom BIGINT PRIMARY KEY,
name VARCHAR(20),
area VARCHAR(20),
type VARCHAR(20),
status VARCHAR(20),
price DECIMAL(10, 2),
idHotel BIGINT,
floor VARCHAR(3),
FOREIGN KEY (idHotel) REFERENCES hotels(idHotel)
);

-- Tạo bảng evaluate
CREATE TABLE evaluate (
idEvaluate BIGINT PRIMARY KEY,
idUser BIGINT,
idHotel BIGINT,
description VARCHAR(100),
star INT,
FOREIGN KEY (idUser) REFERENCES users(idUser),
FOREIGN KEY (idHotel) REFERENCES hotels(idHotel)
);

-- Tạo bảng reservations
CREATE TABLE reservations (
idReser BIGINT PRIMARY KEY,
idUser BIGINT,
checkin TIMESTAMP,
checkout TIMESTAMP,
idRoom BIGINT,
FOREIGN KEY (idUser) REFERENCES users(idUser),
FOREIGN KEY (idRoom) REFERENCES rooms(idRoom)
);

INSERT INTO users (idUser, name, phone, address, email, password)
VALUES (1, 'Nguyễn Văn A', '1234567890', '123 Đường ABC', 'nguyenvana@example.com', 'password123'),
       (2, 'Trần Thị B', '9876543210', '456 Đường XYZ', 'tranthib@example.com', 'pass123');

INSERT INTO hotels (idHotel, idOwner, name, address, email, phone, description, status)
VALUES (1, 1, 'Khách sạn A', '123 Đường ABC', 'hotela@example.com', '1234567890', 'Khách sạn sang trọng', true),
(2, 1, 'Khách sạn B', '456 Đường XYZ', 'hotelb@example.com', '9876543210', 'Khách sạn nhỏ xinh', true);

INSERT INTO rooms (idRoom, name, area, type, status, price, idHotel, floor)
VALUES (1, 'Phòng 101', '30 m2', 'Tiêu chuẩn', 'Còn trống', 100.00, 1, '1'),
       (2, 'Phòng 201', '40 m2', 'Deluxe', 'Còn trống', 150.00, 1, '2');

INSERT INTO evaluate (idEvaluate, idUser, idHotel, description, star)
VALUES (1, 2, 1, 'Khách sạn rất tuyệt vời', 5),
       (2, 1, 2, 'Dịch vụ tốt, phòng sạch sẽ', 4);

INSERT INTO reservations (idReser, idUser, checkin, checkout, idRoom)
VALUES (1, 1, '2024-03-10', '2024-03-15', 1),
       (2, 2, '2024-03-12', '2024-03-14', 2);

select * from users;
select * from hotels;
select * from rooms;
select * from reservations;
select * from evaluate;