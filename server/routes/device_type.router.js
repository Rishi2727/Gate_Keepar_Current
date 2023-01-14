const express = require('express');
const router = express.Router();
const {deviceTypeController} = require('../controllers/index');

router.post('/addDeviceType', deviceTypeController.createDeviceType);
router.get('/getAllDeviceTypes', deviceTypeController.getAllDeviceTypes);
router.get('/getDeviceTypeById/:id', deviceTypeController.getDeviceTypeById);
router.put('/editDeviceType/:id', deviceTypeController.editDeviceType);
router.delete('/deleteDeviceType/:id', deviceTypeController.deleteDeviceType);


module.exports = router;
