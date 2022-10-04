const express = require('express');
const products = require('./products');
const system = require('./system');
const router = express.Router();

router.use('/products', products);
router.use('/ping', system); 
module.exports = router;