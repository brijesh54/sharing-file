const express = require('express');
const router = express.Router();    


const { Fetchfile } = require('../controllers/showController')


router.route('/:uuid').get(Fetchfile);



module.exports = router;