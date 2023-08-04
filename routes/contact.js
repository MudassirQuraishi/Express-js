const express = require('express');

const contactController = require('../controllers/contact')

const router = express.Router();

router.get('/',contactController.getContact);

router.post('/',contactController.postContact)

module.exports = router;