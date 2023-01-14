const express = require('express');
const router = express.Router();
const {permissionController} = require('../controllers/index');

router.post('/addPermission', permissionController.createPermission);
router.get('/getAllPermissions', permissionController.getAllPermissions);
router.get('/getPermissionById/:id', permissionController.getPermissionById);
router.put('/editPermissionById/:id', permissionController.editPermissionById);
router.delete('/deletePermissionById/:id', permissionController.deletePermissionById);


module.exports = router;