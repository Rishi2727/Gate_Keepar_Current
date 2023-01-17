const express = require('express');
const router = express.Router();
const {portsController} = require('../controllers/index');


router.post('/addPort', portsController.addPort);
router.get('/getAllPorts', portsController.getAllPorts);
router.get('/getActivePorts', portsController.getActivePorts);
router.get('/getPortById/:id', portsController.getPortById);
router.put('/editPortById/:id', portsController.editPort);
router.delete('/deletePortById/:id', portsController.deletePort);



module.exports = router;