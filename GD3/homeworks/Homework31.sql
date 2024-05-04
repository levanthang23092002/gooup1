

--------------------------------- --------MYSql and Postgres-------- ---------------------------------

INSERT INTO users (idUser, name, phone, address, email, password)
VALUES (3, 'Lê Thị C', '0123456789', '789 Đường XYZ', 'lethic@example.com', 'pass456'),
       (4, 'Phạm Văn D', '0987654321', '321 Đường ABC', 'phamvand@example.com', 'password456');
       


INSERT INTO hotels (idHotel, idOwner, name, address, email, phone, description, status)
VALUES (3, 2, 'Khách sạn C', '789 Đường XYZ', 'hotelc@example.com', '0123456789', 'Khách sạn hiện đại', true),
       (4, 2, 'Khách sạn D', '321 Đường ABC', 'hoteld@example.com', '0987654321', 'Khách sạn giá rẻ', true),
       (5, 3, 'Khách sạn E', '789 Đường ABC', 'hotele@example.com', '0123456789', 'Khách sạn sang trọng', true),
       (6, 3, 'Khách sạn F', '321 Đường XYZ', 'hotelf@example.com', '0987654321', 'Khách sạn nhỏ xinh', true),
       (7, 4, 'Khách sạn G', '789 Đường ABC', 'hotelg@example.com', '0123456789', 'Khách sạn hiện đại', true),
       (8, 4, 'Khách sạn H', '321 Đường XYZ', 'hotelh@example.com', '0987654321', 'Khách sạn giá rẻ', true),
       (9, 1, 'Khách sạn C', '789 Đường XYZ', 'hotelc@example.com', '0123456789', 'Khách sạn hiện đại', true),
       (10, 1, 'Khách sạn D', '321 Đường ABC', 'hoteld@example.com', '0987654321', 'Khách sạn giá rẻ', true),
       (11, 1, 'Khách sạn E', '789 Đường ABC', 'hotele@example.com', '0123456789', 'Khách sạn sang trọng', true),
       (12, 1, 'Khách sạn F', '321 Đường XYZ', 'hotelf@example.com', '0987654321', 'Khách sạn nhỏ xinh', true),
       (13, 2, 'Khách sạn G', '789 Đường ABC', 'hotelg@example.com', '0123456789', 'Khách sạn hiện đại', true),
       (14, 4, 'Khách sạn H', '321 Đường XYZ', 'hotelh@example.com', '0987654321', 'Khách sạn giá rẻ', true);

INSERT INTO rooms (idRoom, name, area, type, status, price, idHotel, floor)
VALUES (3, 'Phòng 301', '35 m2', 'Tiêu chuẩn', 'Còn trống', 120.00, 3, '3'),
       (4, 'Phòng 401', '45 m2', 'Deluxe', 'Còn trống', 180.00, 3, '4'),
       (5, 'Phòng 501', '30 m2', 'Tiêu chuẩn', 'Còn trống', 100.00, 5, '5'),
       (6, 'Phòng 601', '40 m2', 'Deluxe', 'Còn trống', 150.00, 5, '6'),
       (7, 'Phòng 701', '35 m2', 'Tiêu chuẩn', 'Còn trống', 120.00, 6, '7'),
       (8, 'Phòng 801', '45 m2', 'Deluxe', 'Còn trống', 180.00, 6, '8'),
       (9, 'Phòng 901', '30 m2', 'Tiêu chuẩn', 'Còn trống', 100.00, 7, '9'),
       (10, 'Phòng 1001', '40 m2', 'Deluxe', 'Còn trống', 150.00, 7, '10'),
       (11, 'Phòng 302', '35 m2', 'Tiêu chuẩn', 'Còn trống', 120.00, 3, '3'),
       (12, 'Phòng 402', '45 m2', 'Deluxe', 'Còn trống', 180.00, 3, '4'),
       (13, 'Phòng 502', '30 m2', 'Tiêu chuẩn', 'Còn trống', 100.00, 5, '5'),
       (14, 'Phòng 602', '40 m2', 'Deluxe', 'Còn trống', 150.00, 5, '6'),
       (15, 'Phòng 702', '35 m2', 'Tiêu chuẩn', 'Còn trống', 120.00, 6, '7'),
       (16, 'Phòng 802', '45 m2', 'Deluxe', 'Còn trống', 180.00, 6, '8'),
       (17, 'Phòng 902', '30 m2', 'Tiêu chuẩn', 'Còn trống', 100.00, 7, '9'),
       (18, 'Phòng 1002', '40 m2', 'Deluxe', 'Còn trống', 150.00, 7, '10'),
       (19, 'Phòng 303', '35 m2', 'Tiêu chuẩn', 'Còn trống', 120.00, 3, '3'),
       (20, 'Phòng 403', '45 m2', 'Deluxe', 'Còn trống', 180.00, 3, '4');

INSERT INTO evaluate (idEvaluate, idUser, idHotel, description, star)
VALUES (3, 1, 3, 'Khách sạn đẹp và tiện nghi', 4),
       (4, 2, 4, 'Giá phòng phù hợp, nhân viên thân thiện', 3),
       (5, 3, 5, 'Khách sạn rất tuyệt vời', 5),
       (6, 4, 6, 'Dịch vụ tốt, phòng sạch sẽ', 4),
       (7, 1, 7, 'Khách sạn đẹp và tiện nghi', 4),
       (8, 2, 8, 'Giá phòng phù hợp, nhân viên thân thiện', 3),
       (9, 2, 3, 'Khách sạn sạch sẽ, thoáng mát', 4),
       (10, 3, 1, 'Phòng view đẹp, không gian thoải mái', 5),
       (11, 4, 5, 'Dịch vụ tuyệt vời, không gian thoải mái', 5),
       (12, 1, 6, 'Phòng sạch sẽ, nhân viên thân thiện', 4),
       (13, 3, 7, 'Đồ ăn ngon, không gian đẹp', 4),
       (14, 2, 8, 'Giá cả hợp lý, phục vụ tận tâm', 3),
       (15, 1, 3, 'Khách sạn tiện nghi, nhân viên vui vẻ', 4),
       (16, 3, 3, 'Phòng view đẹp, không gian sang trọng', 5),
       (17, 2, 5, 'Dịch vụ chuyên nghiệp, đồ ăn ngon', 5),
       (18, 3, 6, 'Dịch vụ tốt, phòng sạch sẽ', 4),
       (19, 1, 7, 'Khách sạn đẹp, không gian thoáng đãng', 4),
       (20, 3, 8, 'Giá phòng phù hợp, nhân viên thân thiện', 3),
       (21, 1, 9, 'Khách sạn đẹp và tiện nghi', 3),
       (22, 2, 9, 'Giá phòng phù hợp, nhân viên thân thiện', 3),
       (23, 3, 11, 'Khách sạn rất tuyệt vời', 5),
       (24, 4, 11, 'Dịch vụ tốt, phòng sạch sẽ', 3),
       (25, 1, 10, 'Khách sạn đẹp và tiện nghi', 2),
       (26, 2, 12, 'Giá phòng phù hợp, nhân viên thân thiện', 1);

INSERT INTO reservations (idReser, idUser, checkin, checkout, idRoom)
VALUES (3, 1, '2024-03-16', '2024-03-20', 3),
       (4, 2, '2024-03-18', '2024-03-19', 4), 
       (5, 3, '2024-03-21', '2024-03-25', 5),
       (6, 4, '2024-03-22', '2024-03-24', 6),
       (7, 2, '2024-03-23', '2024-03-27', 7),
       (8, 3, '2024-03-24', '2024-03-26', 8),
       (9, 1, '2024-03-25', '2024-03-29', 9),
       (10, 2, '2024-03-26', '2024-03-28', 10),
       (11, 2, '2024-03-30', '2024-04-02', 5),
       (12, 1, '2024-04-01', '2024-04-03', 6),
       (13, 3, '2024-04-02', '2024-04-05', 7),
       (14, 3, '2024-04-03', '2024-04-06', 8),
       (15, 2, '2024-04-04', '2024-04-08', 9), 
       (16, 4, '2024-04-05', '2024-04-10', 10),
       (17, 4, '2024-04-06', '2024-04-11', 5),
       (18, 2, '2024-04-07', '2024-04-12', 6),
       (19, 1, '2024-04-08', '2024-04-13', 7),
       (20, 3, '2024-04-09', '2024-04-14', 8);

-- ý 1 
SELECT   h.name as hotel, h.address, h.email, h.phone, h.description, h.status , AVG(e.star) as Star
FROM hotels AS h
RIGHT JOIN evaluate AS e ON e.idHotel = h.idHotel
WHERE h.idOwner = 1
GROUP BY e.idUser, h.idHotel, h.name, h.address
Having h.description like '%giá rẻ%'
order by AVG(e.star)
LIMIT 10 OFFSET 0

-- ý 2 
SELECT r.name, r.type, r.status, r.price, r.floor
FROM rooms as r
where r.idhotel = 6 and r.type like 'Tiêu chuẩn'
order by price
LIMIT 10 OFFSET 0

--------------------------------- -------- MongoDB -------- ---------------------------------
-- Thêm hotels
db.hotels.insertMany([
  { idHotel: 3, idOwner: 1, name: 'Khách sạn C', address: '789 Đường DEF', email: 'hotelc@example.com', phone: '1111111111', description: 'Khách sạn tiện nghi', status: true },
  { idHotel: 4, idOwner: 1, name: 'Khách sạn D', address: '012 Đường GHI', email: 'hoteld@example.com', phone: '2222222222', description: 'Khách sạn thân thiện gia đình', status: true },
  { idHotel: 5, idOwner: 1, name: 'Khách sạn E', address: '345 Đường JKL', email: 'hotele@example.com', phone: '3333333333', description: 'Khách sạn lãng mạn', status: true },
  { idHotel: 6, idOwner: 1, name: 'Khách sạn F', address: '678 Đường MNO', email: 'hotelf@example.com', phone: '4444444444', description: 'Khách sạn phục vụ chuyến công tác', status: true },
  { idHotel: 7, idOwner: 1, name: 'Khách sạn G', address: '901 Đường PQR', email: 'hotelg@example.com', phone: '5555555555', description: 'Khách sạn gần biển', status: true },
  { idHotel: 8, idOwner: 1, name: 'Khách sạn H', address: '234 Đường STU', email: 'hotelh@example.com', phone: '6666666666', description: 'Khách sạn thể thao', status: true },
  { idHotel: 9, idOwner: 1, name: 'Khách sạn I', address: '567 Đường VWX', email: 'hoteli@example.com', phone: '7777777777', description: 'Khách sạn gia đình', status: true },
  { idHotel: 10, idOwner: 1, name: 'Khách sạn J', address: '890 Đường YZA', email: 'hotelj@example.com', phone: '8888888888', description: 'Khách sạn phục vụ du lịch', status: true },
  { idHotel: 11, idOwner: 2, name: 'Khách sạn K', address: '1234 Đường BCD', email: 'hotelk@example.com', phone: '9999999999', description: 'Khách sạn hiện đại', status: true },
  { idHotel: 12, idOwner: 2, name: 'Khách sạn L', address: '5678 Đường EFG', email: 'hotell@example.com', phone: '0000000000', description: 'Khách sạn gần trung tâm', status: true }
]);
-- Thêm phòng
db.rooms.insertMany([
{ name: 'Phòng 102', area: '25 m2', type: 'Tiêu chuẩn', status: 'Còn trống', price: NumberDecimal("90.00"), idHotel: 1, floor: '1' },
  { name: 'Phòng 202', area: '35 m2', type: 'Deluxe', status: 'Còn trống', price: NumberDecimal("140.00"), idHotel: 1, floor: '2' },
  { name: 'Phòng 103', area: '28 m2', type: 'Tiêu chuẩn', status: 'Còn trống', price: NumberDecimal("95.00"), idHotel: 1, floor: '1' },
  { name: 'Phòng 203', area: '38 m2', type: 'Deluxe', status: 'Còn trống', price: NumberDecimal("145.00"), idHotel: 1, floor: '2' },
  { name: 'Phòng 104', area: '32 m2', type: 'Tiêu chuẩn', status: 'Còn trống', price: NumberDecimal("105.00"), idHotel: 1, floor: '1' },
  { name: 'Phòng 204', area: '42 m2', type: 'Deluxe', status: 'Còn trống', price: NumberDecimal("155.00"), idHotel: 1, floor: '2' },
  { name: 'Phòng 105', area: '30 m2', type: 'Tiêu chuẩn', status: 'Còn trống', price: NumberDecimal("100.00"), idHotel: 1, floor: '1' },
  { name: 'Phòng 205', area: '40 m2', type: 'Deluxe', status: 'Còn trống', price: NumberDecimal("150.00"), idHotel: 1, floor: '2' },
  { name: 'Phòng 106', area: '35 m2', type: 'Tiêu chuẩn', status: 'Còn trống', price: NumberDecimal("95.00"), idHotel: 2, floor: '1' },
  { name: 'Phòng 206', area: '45 m2', type: 'Deluxe', status: 'Còn trống', price: NumberDecimal("160.00"), idHotel: 2, floor: '2' },
  { name: 'Phòng 107', area: '28 m2', type: 'Tiêu chuẩn', status: 'Còn trống', price: NumberDecimal("90.00"), idHotel: 2, floor: '1' },
  { name: 'Phòng 207', area: '38 m2', type: 'Deluxe', status: 'Còn trống', price: NumberDecimal("140.00"), idHotel: 2, floor: '2' },
  { name: 'Phòng 108', area: '32 m2', type: 'Tiêu chuẩn', status: 'Còn trống', price: NumberDecimal("100.00"), idHotel: 2, floor: '1' },
  { name: 'Phòng 208', area: '42 m2', type: 'Deluxe', status: 'Còn trống', price: NumberDecimal("150.00"), idHotel: 2, floor: '2' },
  { name: 'Phòng 109', area: '30 m2', type: 'Tiêu chuẩn', status: 'Còn trống', price: NumberDecimal("95.00"), idHotel: 2, floor: '1' }
]);
-- ý 1 của MongoDB
db.users.aggregate([
  {
    $match: {
      idOwner: 1,
      description: { $regex: "giá rẻ", $options: "i" }
    }
  },
  {
    $lookup: {
      from: "evaluate",
      localField: "idHotel",
      foreignField: "idHotel",
      as: "evaluations"
    }
  },
  {
    $unwind: "$evaluations"
  },
  {
    $group: {
      _id: {
        hotelName: "$name",
        address: "$address",
        email: "$email",
        phone: "$phone",
        description: "$description",
        status: "$status"
      },
      hotelStar: { $avg: "$evaluations.star" }
    }
  },
  {
    $sort: { "hotelStar": 1 }
  },
  {
    $limit: 10
  },
  {
    $project: {
      _id: 0,
      hotel: "$_id",
      hotelStar: 1
    }
  }
]);
-- ý 2 MongoDB
db.rooms.find({
  idHotel: 1,
  type: "/Tiêu chuẩn/"
}).sort({ price: 1 }).limit(10).skip(0);



