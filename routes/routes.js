const express = require('express');
const findImageControllers = require('../controllers/findimagecontrollers');

const router = express.Router();

router.post('/mydata', findImageControllers.findimage)

module.exports = router;