const express = require('express');
const router = express.Router();
const {userController} = require('../controllers/index');


router.post('/addUser', userController.createUser);
router.get('/getAllUsers', userController.getAllUsers);
router.get('/getUserById/:id', userController.getUserById);
router.get('/getUserByOrgId/:org_id', userController.getUserByOrgId);
router.put('/editUser/:id', userController.editUser);
router.delete('/deleteUser/:id', userController.deleteUser);
router.delete('/bulkDeleteUser', userController.bulkDeleteUser);


module.exports = router;