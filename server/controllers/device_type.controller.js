const httpStatus = require("http-status");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



// create device type   
const createDeviceType = async(req, res) => {
    console.log(req.body);
    try {
        const { name, description, operation} = req.body;
        if(!name || !description || !operation){
            return res.status(httpStatus.BAD_REQUEST).send("Please fill all the fields");
        }
        const deviceType = await prisma.device_type.create({
            data: {
                name: name,
                description: description,
                operation: operation,
            },
        });
        res.status(httpStatus.CREATED).send(deviceType);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// get all device types
const getAllDeviceTypes = async(req, res) => {
    try {
        const deviceTypes = await prisma.device_type.findMany();
        res.status(httpStatus.OK).send(deviceTypes);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// get a device type by id
const getDeviceTypeById = async(req, res) => {
    // console.log(req.params.org_id);
    try {
        const { id } = req.params;
        const deviceType = await prisma.device_type.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (!deviceType) {
            return res.status(httpStatus.NOT_FOUND).send("Device Type not found");
        }
        res.status(httpStatus.OK).send(deviceType);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// edit a device type by id
const editDeviceType = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, description, operation} = req.body;
        if(!name || !description || !operation){
            return res.status(httpStatus.BAD_REQUEST).send("Please fill all the fields");
        }
        const deviceType = await prisma.device_type.update({
            where: {
                id: Number(id),
            },
            data: {
                name: name,
                description: description,
                operation: operation,
                updatedAt: new Date(),
            },
        });
        if (!deviceType) {
            return res.status(httpStatus.NOT_FOUND).send("Device Type not found");
        }
        res.status(httpStatus.OK).send(deviceType);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// delete a device type by id
const deleteDeviceType = async(req, res) => {
    try {
        const { id } = req.params;
        const deviceType = await prisma.device_type.delete({
            where: {
                id: Number(id),
            },
        });
        if (!deviceType) {
            return res.status(httpStatus.NOT_FOUND).send("Device Type not found");
        }
        res.status(httpStatus.OK).send(deviceType);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

module.exports = {
    createDeviceType,
    getAllDeviceTypes,
    getDeviceTypeById,
    editDeviceType,
    deleteDeviceType,
}