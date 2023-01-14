const express = require('express');
const router = express.Router();
const {commandsController} = require('../controllers/index');

router.post('/addCommand', commandsController.addCommand);
router.get('/getAllCommands', commandsController.getAllCommands);
router.get('/getCommandById/:id', commandsController.getCommandById);
router.put('/editCommand/:id', commandsController.editCommand);
router.delete('/deleteCommand/:id', commandsController.deleteCommand);

module.exports = router;

