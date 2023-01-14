const express = require('express');
const router = express.Router();
const managerGroupRouter = require('./managerGroup.router');
const managerRouter = require('./manager.router');
const nameGroupMstRouter = require('./nameGroupMst.router');

const organizationRouter = require('./organization.router');
const orgGroupRouter = require('./orgGroup.router');
const userRouter = require('./user.router');
const userGroupRouter = require('./userGroup.router');
const permissionRouter = require('./permission.router');
const doorsRouter = require('./doors.router');
const devicesRouter = require('./devices.router');
const deviceTypeRouter = require('./device_type.router');
const deviceLogRouter = require('./device_log.router');
const commandsRouter = require('./commands.router');
const rfidRouter = require('./rfid_card.router');

router.use('/managerGroup', managerGroupRouter);
router.use('/manager', managerRouter);
router.use('/nameGroupMst', nameGroupMstRouter);


router.use('/organization', organizationRouter);
router.use('/orgGroup', orgGroupRouter);
router.use('/user', userRouter);
router.use('/userGroup', userGroupRouter);
router.use('/permission', permissionRouter);
router.use('/doors', doorsRouter);
router.use('/devices', devicesRouter);
router.use('/deviceType', deviceTypeRouter);
router.use('/deviceLog', deviceLogRouter);
router.use('/commands', commandsRouter);
router.use('/rfid', rfidRouter);



router.get('/', (req, res) => {
    res.send('Welcome to Gate API-- please choose a correct url')
})

module.exports = router;