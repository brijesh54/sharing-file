const express = require('express');
const  router = express.Router();       

const { UploadFile, SendFile } = require('../controllers/filesController')


router.route('/files').post(UploadFile);
router.route('/files/send').post(SendFile);


module.exports = router;