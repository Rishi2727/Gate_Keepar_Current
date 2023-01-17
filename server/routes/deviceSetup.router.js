const express = require('express');
const router = express.Router();

const {devicesSetupController} = require('../controllers/index');

router.post('/addDevice', devicesSetupController.createDevice);
router.get('/getAllDevices', devicesSetupController.getAllDevices);

module.exports = router;