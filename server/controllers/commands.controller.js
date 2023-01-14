const httpStatus = require("http-status");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



//create command
const addCommand = async(req, res) => {
    console.log(req.body);
    try {
        const { name, command_value, description } = req.body;
        if(!name || !command_value || !description){
            return res.status(httpStatus.BAD_REQUEST).send("Please fill all the fields");
        }
        const command = await prisma.commands.create({
            data: {
                name: name,
                command_value: command_value,
                description: description,
            },
        });
        res.status(httpStatus.CREATED).send(command);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// get all commands
const getAllCommands = async(req, res) => {
    try {
        const commands = await prisma.commands.findMany();
        res.status(httpStatus.OK).send(commands);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// get a command by id
const getCommandById = async(req, res) => {
    // console.log(req.params.org_id);
    try {
        const { id } = req.params;
        const command = await prisma.commands.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (!command) {
            return res.status(httpStatus.NOT_FOUND).send("Command not found");
        }
        res.status(httpStatus.OK).send(command);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// update a command by id
const editCommand = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, command_value, description } = req.body;
        const command = await prisma.commands.update({
            where: {
                id: Number(id),
            },
            data: {
                name: name,
                command_value: command_value,
                description: description,
                updatedAt: new Date(),
            },
        });
        if (!command) {
            return res.status(httpStatus.NOT_FOUND).send("Command not found");
        }
        res.status(httpStatus.OK).send(command);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// delete a command by id
const deleteCommand = async(req, res) => {
    try {
        const { id } = req.params;
        const command = await prisma.commands.delete({
            where: {
                id: Number(id),
            },
        });
        if (!command) {
            return res.status(httpStatus.NOT_FOUND).send("Command not found");
        }
        res.status(httpStatus.OK).send(command);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};



module.exports = {
    addCommand,
    getAllCommands,
    getCommandById,
    editCommand,
    deleteCommand,
}