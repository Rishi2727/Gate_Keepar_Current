const express = require('express');
const router = express.Router();
const {nameGroupMstController} = require('../controllers/index');


router.post('/addgroup', nameGroupMstController.createGroupMst),
router.get('/getgroup', nameGroupMstController.getGroupMst), 
router.get('/getgroup/:id', nameGroupMstController.getGroupMstById),
router.put('/editgroup/:id', nameGroupMstController.editGroupMst),
router.delete('/deletegroup/:id', nameGroupMstController.deleteGroupMst)
    



module.exports=router;