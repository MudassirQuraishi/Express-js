const express = require('express');

const contactController = require('../controllers/contact');

const router = express.Router();

router.get('/', contactController.getMessage);

router.post('/message',contactController.postMessage)

module.exports = router;