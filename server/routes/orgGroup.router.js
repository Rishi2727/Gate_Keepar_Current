const express = require('express');
const router = express.Router();
const {orgGroupController} = require('../controllers/index');

router.post('/addOrgGroup', orgGroupController.createOrgGroup)
router.get('/getAllOrgGroups', orgGroupController.getAllOrgGroups)
router.get('/getAllOrgGroupsByOrgId/:org_id', orgGroupController.getAllOrgGroupsByOrgId)
router.get('/getOrgGroupById/:id', orgGroupController.getOrgGroupById)
router.put('/editOrgGroupById/:id', orgGroupController.editOrgGroupById)
router.delete('/deleteOrgGroupById/:id', orgGroupController.deleteOrgGroupById)
router.delete('/bulkDeleteOrgGroupById', orgGroupController.bulkDeleteOrgGroupById)

module.exports=router;