const express = require('express');
const router = express.Router();
const {deviceLogController} = require('../controllers/index');

router.post('/addDeviceLog', deviceLogController.createDeviceLog);

module.exports = router;