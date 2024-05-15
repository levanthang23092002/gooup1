const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const datetime = require('../middlewares/checkPermission')


exports.uploadImage = (req, res) => {
    try {
        const form = new formidable.IncomingForm();

        form.uploadDir = "./public";
        form.keepExtensions = true;
        form.maxFileSize = 10 * 1024 * 1024; // 10MB
        form.multiples = true;

        form.parse(req, async (err, fields, files) => {
            if (err) {
                res.status(500).send('Internal Server Error');
                return;
            }
            if (!files) {
                res.status(400).send('No file uploaded');
                return;
            }
           

            try {
                for (const file of files['']) {
                    const oldPath = file.filepath;
                    const destinationFolder = './public/';
                    // const fileExtension = path.extname(file.originalFilename);

                    // Tạo tên mới cho tệp
                    const newFileName = `${datetime.getdaytime()}_${file.originalFilename}`;

                    // Tạo đường dẫn mới cho tệp trong thư mục đích
                    const newPath = path.join(destinationFolder, newFileName);

                    // Di chuyển tệp vào thư mục đích
                    await fs.promises.rename(oldPath, newPath);
                    console.log(`Đã thêm thành công ${newPath}`);
                }

                res.json({
                    success: "success",
                    message: "upload image success",
                });
            } catch (error) {
                console.error('Lỗi khi di chuyển tệp:', error);
                res.status(500).send('Internal Server Error');
            }
        });
    } catch (error) {
        console.error('Lỗi khi xử lý yêu cầu:', error);
        res.status(500).send('Internal Server Error');
    }
}
exports.getImage = (req, res, next)=>{
    let imageName = "public/" + req.params.file_name
    fs.readFile(imageName,(err, imageData)=>{
        if(err){
            res.json({
                result: "failed",
                message: "get image failed",
            })
        }
        res.writeHead(200,{'content-Type':'image/jpeg'});
        res.end(imageData);
    })
}
