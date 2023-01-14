const httpStatus = require("http-status");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// Create a new userGroup
const createUserGroup = async(req, res) => {
    console.log(req.body);
    try {
        const { org_id, group_name, permission_id } = req.body;
        if(!org_id || !group_name || !permission_id) {
            return res.status(httpStatus.BAD_REQUEST).send("Please provide all required fields");
        }
        const userGroup = await prisma.user_group.create({
            data: {
                org_id: org_id,
                group_name: group_name,
                permission_id: permission_id
            }
        });
        res.status(httpStatus.CREATED).send(userGroup);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// get all userGroups
const getAllUserGroups = async(req, res) => {
    try {
        const userGroups = await prisma.user_group.findMany();
        res.status(httpStatus.OK).send(userGroups);
    }
    catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

//get a userGroup by org_id
const getUserGroupByOrgId = async(req, res) => {
    try {
        const { org_id } = req.params;
        const userGroup = await prisma.user_group.findMany({
            where: {
                org_id: Number(org_id),
            },
        });
        if (!userGroup) {
            return res.status(httpStatus.NOT_FOUND).send("UserGroup not found");
        }
        res.status(httpStatus.OK).send(userGroup);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

//get a userGroup by id
const getUserGroupById = async(req, res) => {
    try {
        const { id } = req.params;
        const userGroup = await prisma.user_group.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (!userGroup) {
            return res.status(httpStatus.NOT_FOUND).send("UserGroup not found");
        }
        res.status(httpStatus.OK).send(userGroup);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

//update a userGroup by id
const editUserGroupById = async(req, res) => {
    try {
        const { id } = req.params;
        const { org_id, group_name, permission_id } = req.body;
        const userGroup = await prisma.user_group.update({
            where: {
                id: Number(id),
            },
            data: {
                org_id: org_id,
                group_name: group_name,
                permission_id: permission_id,
                updatedAt: new Date()
            },
        });
        if (!userGroup) {
            return res.status(httpStatus.NOT_FOUND).send("UserGroup not found");
        }
        res.status(httpStatus.OK).send(userGroup);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

//delete a userGroup by id
const deleteUserGroupById = async(req, res) => {
    try {
        const { id } = req.params;
        const userGroup = await prisma.user_group.delete({
            where: {
                id: Number(id),
            },
        });
        if (!userGroup) {
            return res.status(httpStatus.NOT_FOUND).send("UserGroup not found");
        }
        res.status(httpStatus.OK).send(userGroup);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// bulk delete userGroups
const bulkDeleteUserGroups = async(req, res) => {
    try {
        const { ids } = req.body;
        const userGroups = await prisma.user_group.deleteMany({
            where: {
                id: {
                    in: ids,
                },
            },
        });
        if (!userGroups) {
            return res.status(httpStatus.NOT_FOUND).send("UserGroups not found");
        }
        res.status(httpStatus.OK).send(userGroups);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};





module.exports = {
    createUserGroup,
    getAllUserGroups,
    getUserGroupByOrgId,
    getUserGroupById,
    editUserGroupById,
    deleteUserGroupById,
    bulkDeleteUserGroups,
    
}