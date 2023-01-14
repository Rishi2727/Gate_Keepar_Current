const express = require('express');
const router = express.Router();
const {organizationController} = require('../controllers/index');


router.post('/addOrg', organizationController.createOrg),
router.get('/getAllOrg', organizationController.getAllOrg), 
router.get('/getOrg/:id', organizationController.getOrgById),
router.delete('/deleteOrg/:id', organizationController.deleteOrg),
router.put('/editOrg/:id', organizationController.editOrg)
    

module.exports=router;