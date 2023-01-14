const httpStatus = require("http-status");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// Create a new device
const createDevice = async(req, res) => {
    console.log(req.body);
    try {
        const { org_id, name, description,device_no,device_typ, port_no,door_id} = req.body;
        if(!org_id || !name || !description || !device_no || !device_typ || !port_no || !door_id){
            return res.status(httpStatus.BAD_REQUEST).send("Please fill all the fields");
        }
        const device = await prisma.devices.create({
            data: {
                org_id: Number(org_id),
                name: name,
                description: description,
                device_no: device_no,
                device_typ: Number(device_typ),
                port_no: port_no,
                door_id: Number(door_id),
            },
        });
        res.status(httpStatus.CREATED).send(device);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// get all devices
const getAllDevices = async(req, res) => {
    try {
        const devices = await prisma.devices.findMany();
        res.status(httpStatus.OK).send(devices);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// get a device by org_id
const getDeviceByOrgId = async(req, res) => {
    // console.log(req.params.org_id);
    try {
        const { org_id } = req.params;
        const device = await prisma.devices.findMany({
            where: {
                org_id: Number(org_id),
            },
        });
        if (!device) {
            return res.status(httpStatus.NOT_FOUND).send("Device not found");
        }
        res.status(httpStatus.OK).send(device);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// get a device by id
const getDeviceById = async(req, res) => {
    // console.log(req.params.org_id);
    try {
        const { id } = req.params;
        const device = await prisma.devices.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (!device) {
            return res.status(httpStatus.NOT_FOUND).send("Device not found");
        }
        res.status(httpStatus.OK).send(device);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// update a device by id
const editDevice = async(req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params;
        const { org_id, name, description,device_no,device_typ, port_no,door_id} = req.body;
        if(!org_id || !name || !description || !device_no || !device_typ || !port_no || !door_id){
            return res.status(httpStatus.BAD_REQUEST).send("Please fill all the fields");
        }
        const device = await prisma.devices.update({
            where: {
                id: Number(id),
            },
            data: {
                org_id: Number(org_id),
                name: name,
                description: description,
                device_no: device_no,
                device_typ: Number(device_typ),
                port_no: port_no,
                door_id: Number(door_id),
                updatedAt: new Date(),
            },
        });
        if (!device) {
            return res.status(httpStatus.NOT_FOUND).send("Device not found");
        }
        res.status(httpStatus.OK).send(device);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};


// delete a device by id
const deleteDevice = async(req, res) => {
    try {
        const { id } = req.params;
        const device = await prisma.devices.delete({
            where: {
                id: Number(id),
            },
        });
        if (!device) {
            return res.status(httpStatus.NOT_FOUND).send("Device not found");
        }
        res.status(httpStatus.OK).send(device);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// bulk delete devices

const bulkDeleteDevices = async(req, res) => {
    try {
        const { ids } = req.body;
        const device = await prisma.devices.deleteMany({
            where: {
                id: {
                    in: ids
                }
            },
        });
        if (!device) {
            return res.status(httpStatus.NOT_FOUND).send("Device not found");
        }
        res.status(httpStatus.OK).send(device);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// Export all functions
module.exports = {
    createDevice,
    getAllDevices,
    getDeviceByOrgId,
    getDeviceById,
    editDevice,
    deleteDevice,
    bulkDeleteDevices
}