-- ý 1   xem thông tin cá nhân
SELECT u.name, u.phone, u.address, u.email From users as u where idUser = 1;
-- ý 2 xe danh sách đã đặt phòng
SELECT r.name, r.type, r.status, r.price, r.floor 
FROM rooms as r
Left JOIN reservations as re
On r.idRoom = re.idRoom
where  re.idUser = 1
order by re.checkin DESC
LIMIT 10 OFFSET 0;

-- ý 3 xem phòng đã đặt
SELECT r.name, r.type, r.status, r.price, r.floor
FROM rooms as r
where  r.idRoom = 1

-- ý 4 xem danh sách dánh giá của mình
SELECT h.name , h.email, h.address, e.description as comment , e.star
From hotels as h
JOIN evaluate as e
On h.idHotel = e.idHotel
where e.idUser = 1

-- ý 5 đặt phòng
INSERT INTO reservations (idReser, idUser, checkin, checkout, idRoom)
VALUES (21, 1, '2024-03-16', null, 3);

-- Nosql
db.users.find({ idUser: 1 }, { name: 1, phone: 1, address: 1, email: 1 });

db.rooms.aggregate([
  {
    $lookup: {
      from: "reservations",
      localField: "idRoom",
      foreignField: "idRoom",
      as: "reservation"
    }
  },
  {
    $match: {
      "reservation.idUser": 1
    }
  },
  {
    $project: {
      name: 1,
      type: 1,
      status: 1,
      price: 1,
      floor: 1
    }
  },
  {
    $sort: {
      "reservation.checkin": -1
    }
  },
  {
    $limit: 10
  },
  {
    $skip: 0
  }
]);

db.rooms.find({idUser: 1}, {name : 1 , type : 1, status : 1, price : 1, floor : 1});

db.hotels.aggregate([
  {
    $lookup: {
      from: "evaluate",
      localField: "idHotel",
      foreignField: "idHotel",
      as: "evaluations"
    }
  },
  {
    $match: {
      "evaluations.idUser": 1
    }
  },
  {
    $project: {
      name: 1,
      email: 1,
      address: 1,
      comment: "$evaluations.description",
      star: "$evaluations.star"
    }
  }
]);
db.reservations.insertMany([
  { idReser: 19, idUser: 1, checkin: ISODate('2024-03-10'), checkout: null , idRoom: 1 }])

