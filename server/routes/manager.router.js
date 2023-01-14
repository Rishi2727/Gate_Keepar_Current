const express = require('express');
const router = express.Router();
const {managerController} = require('../controllers/index');


router.post('/addmanager', managerController.createManager),
router.get('/getmanager', managerController.getManager), 
router.get('/getmanager/:id', managerController.getManagerById),
router.put('/editmanager/:id', managerController.editManager),
router.delete('/deletemanager/:id', managerController.deleteManager)
    



module.exports=router;