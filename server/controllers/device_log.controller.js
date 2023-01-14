const httpStatus = require("http-status");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// create device log
const createDeviceLog = async(req, res) => {
    console.log(req.body);
    try {
        const { org_id, device_id, door_id, user_id, log_type,log_date } = req.body;
        if(!org_id || !device_id || !door_id || !user_id || !log_type ){
            return res.status(httpStatus.BAD_REQUEST).send("Please fill all the fields");
        }
        const deviceLog = await prisma.device_log.create({
            data: {
                org_id: Number(org_id),
                device_id: Number(device_id),
                door_id: Number(door_id),
                user_id: Number(user_id),
                log_type: log_type,
                log_date: log_date,
            },
        });
        res.status(httpStatus.CREATED).send(deviceLog);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};


module.exports = {
    createDeviceLog,
}