const httpStatus = require("http-status");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// port          String    @db.VarChar(100)
//   description   String    @db.VarChar(255)
// create port
const addPort = async(req, res) => {
    console.log(req.body);
    try {
        const { port} = req.body;
        const newPort = await prisma.ports.create({
            data: {
                port: port,
                description: "This is the Port"+port,
            }
        });
        res.status(httpStatus.OK).send(newPort);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};

// get all ports
const getAllPorts = async(req, res) => {
    try {
        const allPorts = await prisma.ports.findMany();
        res.status(httpStatus.OK).send(allPorts);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};

// get port only active
const getActivePorts = async(req, res) => {
    try {
        const allPorts = await prisma.ports.findMany({
            where: {
                isActive: true
            }
        });
        res.status(httpStatus.OK).send(allPorts);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};

// get port by id
const getPortById = async(req, res) => {
    try {
        const { id } = req.params;
        const port = await prisma.ports.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (port) {
            res.status(httpStatus.OK).send(port);
        } else {
            res.status(httpStatus.NOT_FOUND).send("Port not found");
        }
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};

// update port
const editPort = async(req, res) => {
    console.log(req.body);
    console.log(req.params);
    try {
        const { id } = req.params;
        const { port, isActive } = req.body;
       const portToUpdate = await prisma.ports.update({
            where: {
                id: parseInt(id)
            },
            data: {
                port: port,
                isActive: isActive
            }
        });
        res.status(httpStatus.OK).send(portToUpdate);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};

// delete port
const deletePort = async(req, res) => {
    try {
        const { id } = req.params;
        const portToDelete = await prisma.ports.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (portToDelete) {
            const deletedPort = await prisma.ports.delete({
                where: {
                    id: parseInt(id)
                }
            });
            res.status(httpStatus.OK).send(deletedPort);
        } else {
            res.status(httpStatus.NOT_FOUND).send("Port not found");
        }
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};



module.exports={
    addPort,
    getAllPorts,
    getActivePorts,
    getPortById,
    editPort,
    deletePort,


}