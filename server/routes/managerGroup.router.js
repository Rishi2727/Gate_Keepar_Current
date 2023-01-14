const express = require('express');
const router = express.Router();
const {managerGroupController} = require('../controllers/index');


router.post('/addgroup', managerGroupController.createManagerGroup),
router.get('/getgroup', managerGroupController.getManagerGroup), 
router.get('/getgroup/:id', managerGroupController.getManagerGroupById),
router.put('/editgroup/:id', managerGroupController.editManagerGroup),
router.delete('/deletegroup/:id', managerGroupController.deleteManagerGroup)
    



module.exports=router;