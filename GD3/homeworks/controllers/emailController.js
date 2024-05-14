const sendEmail = require('../services/sendEmail');


exports.sendEmail = async(data, req, res) => {
    try {
       
    if(data[4]){
        const response = await sendEmail.sendEmailService(data)
        return res.json({
            status: 'successed',
            message: 'đã gửi thành công'
        });
    }
    return res.json({
        status: 'err',
        message: 'The is mail required'
    })
    } catch (error) {
        console.log(error);
    }
    
  
};