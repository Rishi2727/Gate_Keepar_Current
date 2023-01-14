const httpStatus = require("http-status");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// create a new permission
const createPermission = async(req, res) => {
    // console.log(req.body);
    try {
        const { name, description} = req.body;
        if(!name || !description) {
            return res.status(httpStatus.BAD_REQUEST).send("Please provide all required fields");
        }
        const permission = await prisma.permission.create({
            data: {
                name: name,
                description: description
            }
        });
        res.status(httpStatus.CREATED).send(permission);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// get all permissions
const getAllPermissions = async(req, res) => {
    try {
        const permissions = await prisma.permission.findMany();
        res.status(httpStatus.OK).send(permissions);
    }
    catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

// get a permission by id
const getPermissionById = async(req, res) => {
    try {
        const { id } = req.params;
        const permission = await prisma.permission.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (!permission) {
            return res.status(httpStatus.NOT_FOUND).send("Permission not found");
        }
        res.status(httpStatus.OK).send(permission);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

// update a permission by id
const editPermissionById = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const permission = await prisma.permission.update({
            where: {
                id: Number(id),
            },
            data: {
                name: name,
                description: description,
                updatedAt: new Date()
            },
        });
        if (!permission) {
            return res.status(httpStatus.NOT_FOUND).send("Permission not found");
        }
        res.status(httpStatus.OK).send(permission);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

// delete permissions
const deletePermissionById = async(req, res) => {
    try {
        const { id } = req.params;
        const permission = await prisma.permission.delete({
            where: {
                id: Number(id),
            },
        });
        if (!permission) {
            return res.status(httpStatus.NOT_FOUND).send("Permission not found");
        }
        res.status(httpStatus.OK).send(permission);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

module.exports = {
    createPermission,
    getAllPermissions,
    getPermissionById,
    editPermissionById,
    deletePermissionById

}