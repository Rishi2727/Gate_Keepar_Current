const httpStatus = require("http-status");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// Create a new device
const createDevice = async(req, res) => {
    console.log(req.body);
    try {
        const { friendlyName, locationId, manufacturer,path,pnpId, productId,serialNumber,vendorId} = req.body;
        if(!friendlyName || !locationId || !manufacturer || !path || !pnpId || !productId || !serialNumber || !vendorId){
            return res.status(httpStatus.BAD_REQUEST).send("Please fill all the fields");
        }
        const device = await prisma.devices_setup.create({
            data: {
                friendlyName: friendlyName,
                locationId: locationId,
                manufacturer: manufacturer,
                path: path,
                pnpId: pnpId,
                productId: productId,
                serialNumber: serialNumber,
                vendorId: vendorId,
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
        const devices = await prisma.devices_setup.findMany();
        res.status(httpStatus.OK).send(devices);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

module.exports = {
    createDevice,
    getAllDevices,
};