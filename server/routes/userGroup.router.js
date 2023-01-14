const express = require('express');
const router = express.Router();
const {userGroupController} = require('../controllers/index');

router.post('/addUserGroup', userGroupController.createUserGroup);
router.get('/getAllUserGroups', userGroupController.getAllUserGroups);
router.get('/getUserGroupByOrgId/:org_id', userGroupController.getUserGroupByOrgId);
router.get('/getUserGroupById/:id', userGroupController.getUserGroupById);
router.put('/editUserGroupById/:id', userGroupController.editUserGroupById);
router.delete('/deleteUserGroupById/:id', userGroupController.deleteUserGroupById);
router.delete('/bulkDeleteUserGroups', userGroupController.bulkDeleteUserGroups);


module.exports = router;