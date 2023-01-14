const express = require('express');
const router = express.Router();
const {rfidController} = require('../controllers/index');


router.post('/addRfidCard', rfidController.addRfidCard);
router.get('/getAllRfidCards', rfidController.getAllRfidCards);
router.get('/getRfidCardById/:id', rfidController.getRfidCardById);
router.put('/editRfidCard/:id', rfidController.editRfidCard);
router.delete('/deleteRfidCard/:id', rfidController.deleteRfidCard);

module.exports = router;