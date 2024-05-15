const express = require('express');
const router = express.Router();
const upload = require('../controllers/uploadController')


router.post('/upload',upload.uploadImage );
router.get('/upload/:file_name',upload.getImage );
module.exports = router;