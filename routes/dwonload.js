const express = require('express');
const router = express.Router();    

const { downloadFile } = require('../controllers/downloadController')


router.route('/:uuid').get(downloadFile);


module.exports = router;