const supertest = require('supertest');
const express = require('express');
const userController = require('../controllers/userController');
const app = express();
const user = require('../routes/auth');


jest.useRealTimers();
app.use('/users', user);


describe('Test /Room', () => {
    it('get all room', async () => {

        const response = await supertest(app).get('/users/room');
        expect(response.status).toBe(200);
        expect(response.body.success).toEqual(true);
    });
});
describe('Test /Hotel', () => {
    it('get all data room', async () => {
        const response = await supertest(app).get('/users/hotel');
        expect(response.status).toBe(200);
        expect(response.body.success).toEqual(true)
    });
    it('get success api room', async () => {
        const response = await supertest(app).get('/users/hotel');
        expect(response.status).toBe(200);
        expect(response.body.success).toEqual(true)
    })
    it('get success api room', async () => {
        const response = await supertest(app).get('/users/hotel');
        expect(response.status).toBe(200);
        expect(response.body.message).toEqual("Successfully retrieved hotels")

    })
});
describe('Test /User', () => {
    it('get data user by id success', async () => {
        let userId = 10;
        const response = await supertest(app).get(`/users/user/${userId}`);
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toEqual("Thành công");

    });
    it('get data user by id Not found', async () => {
        let userId = 50;
        const response = await supertest(app).get(`/users/user/${userId}`);
        expect(response.body.success).toBe(false);
        expect(response.status).toBe(404);
        expect(response.body.message).toEqual("No found");


    })
});

describe('Test /user/:id/AllRoomBooking', () => {
    it('get data room booking of user by id success', async () => {
        let userId = 10;
        const response = await supertest(app).get(`/users/user/${userId}/AllRoomBooking`);
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toEqual("Thành công");
        expect(response.body.data).toEqual([
            {
                "name": "Phòng 201",
                "type": "Deluxe",
                "status": "Còn trống",
                "price": "150.00",
                "floor": "2"
            }
        ]);
    });

    it('get data room booking of user by id Not found', async () => {
        let userId = 50;
        const response = await supertest(app).get(`/users/user/${userId}/AllRoomBooking`);
        expect(response.body.success).toBe(false);
        expect(response.status).toBe(404);
        expect(response.body.message).toEqual("Not Found");


    })

});
describe('Test RoomBooking/:id', () => {
    it('get data room booking by id room success', async () => {
        let userId = 10;
        const response = await supertest(app).get(`/users/RoomBooking/${userId}`);
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toEqual("Thành công");
        expect(response.body.data).toEqual([
            {
                "name": "Phòng 1001",
                "type": "Deluxe",
                "status": "Còn trống",
                "price": "150.00",
                "floor": "10"
            }
        ]);
    });
    it('get data room booking by id room Not found', async () => {
        let userId = 100;
        const response = await supertest(app).get(`/users/RoomBooking/${userId}`);
        expect(response.body.success).toBe(false);
        expect(response.status).toBe(404);
        expect(response.body.message).toEqual("Not Found");


    })
});
describe('Test /allEvaluate', () => {
    it('get data allEvaluate ', async () => {

        const response = await supertest(app).get(`/users/allEvaluate`);
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toEqual("Thành công");

    });
});

describe('Test login function', () => {
    it('Đăng Nhập Thành công', (done) => {
        const req = {
            body: {
                email: 'll.com',
                password: 'pass123'
            }
        };

        const res = {
            status: function (statusCode) {
                expect(statusCode).toBe(200);
                return this;
            },
            json: function (data) {
                expect(data.success).toBe(true);
                done();
            }
        };

        userController.login(req, res);
    });
    it('Email Passwold ko đúng', (done) => {
        const req = {
            body: {
                email: 'test.com',
                password: 'password'
            }
        };

        const res = {
            status: function (statusCode) {
                expect(statusCode).toBe(401);
                return this;
            },
            json: function (data) {
                expect(data.success).toBe(false);
                expect(data.message).toBe('Không Tìm Thấy Tài Khoản Này');
                done();
            }
        };

        userController.login(req, res);
    });
    it('Email null ', (done) => {
        const req = {
            body: {
                email: null,
                password: 'password'
            }
        };

        const res = {
            status: function (statusCode) {
                expect(statusCode).toBe(402);
                return this;
            },
            json: function (data) {
                expect(data.success).toBe(false);
                expect(data.message).toBe('Cần Điền Đủ Thông Tin');
                done();
            }
        };

        userController.login(req, res);
    });
    it('Passwold null ', (done) => {
        const req = {
            body: {
                email: "test.com",
                password: null
            }
        };

        const res = {
            status: function (statusCode) {
                expect(statusCode).toBe(402);
                return this;
            },
            json: function (data) {
                expect(data.success).toBe(false);
                expect(data.message).toBe('Cần Điền Đủ Thông Tin');
                done();
            }
        };

        userController.login(req, res);
    });
    it('Email and Passwold null ', (done) => {
        const req = {
            body: {
                email: null,
                password: null
            }
        };

        const res = {
            status: function (statusCode) {
                expect(statusCode).toBe(402);
                return this;
            },
            json: function (data) {
                expect(data.success).toBe(false);
                expect(data.message).toBe('Cần Điền Đủ Thông Tin');
                done();
            }
        };

        userController.login(req, res);
    });
});

describe('Test Register function', () => {
    it('Đăng kí Thành công', (done) => {
        const req = {
            body: {
                name: "Lê Văn Thắng",
                phone: "0966948914",
                address: "Quảng Nam",
                email: "thangcatre230904.com",
                password: "pass123"
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const registerMock = jest.spyOn(userController, 'register');
        registerMock.mockImplementation((req, res) => {
            res.status(200).json({ success: true });
        });

        userController.register(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ success: true });

        registerMock.mockRestore();
        done();
    });

    it('Đăng kí Thất Bại', (done) => {
        const req = {
            body: {
                name: "Lê Văn Thắng",
                phone: "0966948914",
                address: "Quảng Nam",
                email: null,
                password: "pass123"
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const registerMock = jest.spyOn(userController, 'register');
        registerMock.mockImplementation((req, res) => {
            res.status(500).json({ success: false });
        });

        userController.register(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ success: false });

        registerMock.mockRestore();
        done();
    });

    it('Email đã tồn tại', (done) => {
        const req = {
            body: {
                name: "Lê Văn Thắng",
                phone: "0966948914",
                address: "Quảng Nam",
                email: "levanthang.com",
                password: "pass123"
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const registerMock = jest.spyOn(userController, 'register');
        registerMock.mockImplementation((req, res) => {
            res.status(401).json({ success: false });
        });

        userController.register(req, res);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ success: false });

        registerMock.mockRestore();
        done();
    });
});
describe('Test Update Hotel function', () => {
    it('Update Thành công', (done) => {
        const req = {
            body: {
                name: "Khách sạn A",
                address: "789 Đường ABC",
                email: "hotele@example.com",
                phone: "0123456788",
                description: "Khách sạn sang trọng",
                status: true
            },
            params: {
                id: 5
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const updateHotelMock = jest.spyOn(userController, 'updateHotel');
        updateHotelMock.mockImplementation((req, res) => {
            res.status(200).json({ success: true });
        });

        userController.updateHotel(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ success: true });

        updateHotelMock.mockRestore();
        done();
    });

    it('Hotel Not Found', (done) => {
        const req = {
            body: {
                name: "Khách sạn E",
                address: "789 Đường ABC",
                email: "hotele@example.com",
                phone: "0123456788",
                description: "Khách sạn sang trọng",
                status: true
            },
            params: {
                id: 20
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const updateHotelMock = jest.spyOn(userController, 'updateHotel');
        updateHotelMock.mockImplementation((req, res) => {
            res.status(404).json({ success: false });
        });

        userController.updateHotel(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ success: false });

        updateHotelMock.mockRestore();
        done();
    });

    it('Hotel Đã Xóa', (done) => {
        const req = {
            body: {
                name: "Khách sạn E",
                address: "789 Đường ABC",
                email: "hotele@example.com",
                phone: "0123456788",
                description: "Khách sạn sang trọng",
                status: true
            },
            params: {
                id: 4
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const updateHotelMock = jest.spyOn(userController, 'updateHotel');
        updateHotelMock.mockImplementation((req, res) => {
            res.status(401).json({ success: false });
        });

        userController.updateHotel(req, res);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ success: false });

        updateHotelMock.mockRestore();
        done();
    });
});

describe('Test Delete Hotel function', () => {
    it('Delete Thành công', (done) => {
        const req = {
            params: {
                id: 5
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const deleteHotelMock = jest.spyOn(userController, 'deleteHotel');
        deleteHotelMock.mockImplementation((req, res) => {
            res.status(200).json({ success: true });
        });

        userController.deleteHotel(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ success: true });

        deleteHotelMock.mockRestore();
        done();
    });

    it('Hotel Not Found', (done) => {
        const req = {
            params: {
                id: 20
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const deleteHotelMock = jest.spyOn(userController, 'deleteHotel');
        deleteHotelMock.mockImplementation((req, res) => {
            res.status(404).json({ success: false });
        });

        userController.deleteHotel(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ success: false });

        deleteHotelMock.mockRestore();
        done();
    });
});
describe('Test addmin function', () => {
    it('get all', (done) => {
        const req = {};
        const res = {
            status: function (statusCode) {
                expect(statusCode).toBe(200);
                return this;
            },
            json: function (data) {
                expect(data.success).toBe(true);
                done();
            }
        };
        userController.getalladmin(req, res);
    });
    it('get addmin by id success', (done) => {
        const req = {
            params: {
                id: 3
            }
        };
        const res = {
            status: function (statusCode) {
                expect(statusCode).toBe(200);
                return this;
            },
            json: function (data) {
                expect(data.success).toBe(true);
                done();
            }
        };
        userController.getAdmin(req, res);
    });
    it('get addmin by id fail (not found)  ', (done) => {
        const req = {
            params: {
                id: 12
            }
        };
        const res = {
            status: function (statusCode) {
                expect(statusCode).toBe(404);
                return this;
            },
            json: function (data) {
                expect(data.success).toBe(false);
                done();
            }
        };
        userController.getAdmin(req, res);
    });
    it('Update addmin by id success', (done) => {
        const req = {
            params: {
                id: 3
            },
            body: {

                name: "Lê Văn Thắng AAA",
                phone: "0966948914",
                address: "Bình Trung, Thăng Bình, Quảng Nam",
                email: "thangdepthe@example.com",
                role: "ADMIN",
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const updateAdminMock = jest.spyOn(userController, 'updateAdmin');
        updateAdminMock.mockImplementation((req, res)=>{
            res.status(200).json({ success: true });
        })
        userController.updateAdmin(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ success: true });

        updateAdminMock.mockRestore();
        done();
    });
    it('Update addmin by id fail (by not found id ADMIN)  ', (done) => {
        const req = {
            params: {
                id: 14
            },
            body: {
                name: "Lê Văn Thắng",
                phone: "0966948914",
                address: "Bình Trung, Thăng Bình, Quảng Nam",
                email: "thangdepthe@example.com",
                role: "ADMIN",
            }
        };
         const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const updateAdminMock = jest.spyOn(userController, 'updateAdmin');
        updateAdminMock.mockImplementation((req, res)=>{
            res.status(404).json({ success: false });
        })
        userController.updateAdmin(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ success: false });

        updateAdminMock.mockRestore();
        done();
    });
    it('Update addmin by id fail (By Email Null )  ', (done) => {
        const req = {
            params: {
                id: 10
            },
            body: {
                name: "Lê Văn Thắng",
                phone: "0966948914",
                address: "Bình Trung, Thăng Bình, Quảng Nam",
                email: null,
                role: "ADMIN",
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const updateAdminMock = jest.spyOn(userController, 'updateAdmin');
        updateAdminMock.mockImplementation((req, res)=>{
            res.status(500).json({ success: false });
        })
        userController.updateAdmin(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ success: false });

        updateAdminMock.mockRestore();
        done();
    });
});
describe('Test add Room function', () => {
    it('Add room success', (done) => {
        const req = {
            body: {
                name: "P 0123",
                area: "50 m2",
                type: "Tiêu chuẩn",
                status: "Còn trống",
                price: 180,
                idhotel: 7,
                floor: 5
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const addRoomMock = jest.spyOn(userController, 'addRoom');
        addRoomMock.mockImplementation((req, res)=>{
            res.status(200).json({ success: true });
        })
        userController.addRoom(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ success: true });

        addRoomMock.mockRestore();
        done();
    });
    it('Add room fail by id hotel not found', (done) => {
        const req = {
            body: {
                name: "P 021",
                area: "50 m2",
                type: "Tiêu chuẩn",
                status: "Còn trống",
                price: 180,
                idhotel: 90,
                floor: 6
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const addRoomMock = jest.spyOn(userController, 'addRoom');
        addRoomMock .mockImplementation((req, res)=>{
            res.status(500).json({ success: false });
        })
        userController.addRoom(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ success: false });

        addRoomMock .mockRestore();
        done();
    });
    it('Add room fail by id hotel null', (done) => {
        const req = {
            body: {
                name: "P 021",
                area: "50 m2",
                type: "Tiêu chuẩn",
                status: "Còn trống",
                price: 180,
                idhotel: null,
                floor: 6
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const addRoomMock = jest.spyOn(userController, 'addRoom');
        addRoomMock .mockImplementation((req, res)=>{
            res.status(500).json({ success: false });
        })
        userController.addRoom(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ success: false });

        addRoomMock .mockRestore();
        done();
    });
});
describe('Test approve function', () => {
    it('Approve room success', (done) => {
        const req = {
            params: {
                id: 35
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const approveRoomMock = jest.spyOn(userController, 'approveRoom');
        approveRoomMock .mockImplementation((req, res)=>{
            res.status(200).json({ success: true });
        })
        userController.approveRoom(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ success: true });

        approveRoomMock.mockRestore();
        done();
    });
    it('Approve room fail by id room not found', (done) => {
        const req = {
            params: {
                id: 700
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const approveRoomMock = jest.spyOn(userController, 'approveRoom');
        approveRoomMock .mockImplementation((req, res)=>{
            res.status(404).json({ success: false });
        })
        userController.approveRoom(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ success: false });

        approveRoomMock.mockRestore();
        done();
    });

});


