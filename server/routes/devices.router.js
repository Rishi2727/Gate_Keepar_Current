const express = require('express');
const router = express.Router();
const {devicesController} = require('../controllers/index');

router.post('/addDevice', devicesController.createDevice);
router.get('/getAllDevices', devicesController.getAllDevices);
router.get('/getDeviceByOrgId/:org_id', devicesController.getDeviceByOrgId);
router.get('/getDeviceById/:id', devicesController.getDeviceById);
router.put('/editDevice/:id', devicesController.editDevice);
router.delete('/deleteDevice/:id', devicesController.deleteDevice);
router.post('/bulkDeleteDevices', devicesController.bulkDeleteDevices);

module.exports = router;
