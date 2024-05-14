const nodemailer = require("nodemailer");
require('dotenv').config();
exports.sendEmailService = async (data) => {
    try {
        console.log(data[4]);
        let transporter = await nodemailer.createTransport({
            service: "gmail",
            port: 465,
            secure: true, // true for 465, false for other ports
            logger: true,
            debug: true,
            secureConnection: false,
            auth: {
                user: process.env.email, // generated ethereal user
                pass: process.env.pass_email, // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let info = await transporter.sendMail({
            from: process.env.email, // sender address
            to: data[4], // list of receivers
            subject: "Đăng kí Tài khoản Thành Công",
            html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Registration Successful</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    line-height: 1.6;
                }
                .container {
                    width: 80%;
                    margin: auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    background-color: #4CAF50;
                    color: white;
                    padding: 10px;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }
                .header img {
                    width: 150px;
                    margin-bottom: 10px;
                }
                .content {
                    padding: 20px;
                    text-align: center;
                }
                .content h1 {
                    color: #4CAF50;
                }
                .content p {
                    font-size: 16px;
                    text-align: left;
                }
                .footer {
                    text-align: center;
                    margin-top: 20px;
                    font-size: 14px;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                <img src="https://gooup1.vn/static/assets/images/logo_sub_admin_en.png" alt="Company Logo">
                </div>
                <div class="content">
                    <h1 >Registration Successful!</h1>
                    <p>Dear ${data[1]},</p>
                    <p>Thank you for registering with Gooup1. We are thrilled to have you on board.</p>
                    <p>Your account has been successfully created. You can now log in to your account using your registered email address: <strong>${data[4]}</strong></p>
                    <p>If you have any questions or need assistance, please feel free to contact our support team.</p>
                    <p>Best regards,</p>
                    <p>The Gooup1 </p>
                </div>
                <div class="footer">
                    <p>Chào mừng bạn đến với Gooup1</p>
                </div>
            </div>
        </body>
        </html>
      `

        });
        return info;
    } catch (error) {
        console.log(error)
    }
}