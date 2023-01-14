const express = require('express');
const router = express.Router();
const {doorsController} = require('../controllers/index');

router.post('/addDoor', doorsController.createDoor);
router.get('/getAllDoors', doorsController.getAllDoors);
router.get('/getDoorById/:id', doorsController.getDoorById);
router.put('/editDoorById/:id', doorsController.editDoorById);
router.delete('/deleteDoorById/:id', doorsController.deleteDoorById);




module.exports = router;    