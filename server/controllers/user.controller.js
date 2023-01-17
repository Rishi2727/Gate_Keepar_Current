const httpStatus = require("http-status");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// Create a new user 
const createUser = async(req, res) => {
    console.log(req.body);
    try {
        const { org_id, name, email, password, phone_no, address, description, user_img, user_group_id,rfid_card_id} = req.body;
        if(!org_id || !name || !email || !password || !phone_no || !address || !description || !user_group_id || !rfid_card_id) {
            return res.status(httpStatus.BAD_REQUEST).send("Please provide all required fields");
        }
        
        const user = await prisma.user.create({
            data: {
                org_id: org_id,
                name: name,
                email: email,
                password: password,
                phone_no: phone_no,
                address: address,
                description: description,
                user_img: user_img,
                user_group_id: user_group_id,
                rfid_card_id: rfid_card_id
            }
        });
        res.status(httpStatus.CREATED).send(user);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};


// get all users
const getAllUsers = async(req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(httpStatus.OK).send(users);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// get a user by org_id
const getUserByOrgId = async(req, res) => {
    // console.log(req.params.org_id);
    try {
        const { org_id } = req.params;
        const user = await prisma.user.findMany({
            where: {
                org_id: Number(org_id),
            },
        });
        if (!user) {
            return res.status(httpStatus.NOT_FOUND).send("User not found");
        }
        res.status(httpStatus.OK).send(user);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// get a user by id
const getUserById = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (!user) {
            return res.status(httpStatus.NOT_FOUND).send("User not found");
        }
        res.status(httpStatus.OK).send(user);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// update a user
const editUser = async(req, res) => {
    try {
        const { id } = req.params;
        const { org_id, name, email, password, phone_no, address, description, user_img, user_group_id,rfid_card_id} = req.body;
        if(!org_id || !name || !email || !password || !phone_no || !address || !description || !user_group_id || !rfid_card_id) {
            return res.status(httpStatus.BAD_REQUEST).send("Please provide all required fields");
        }
        const user = await prisma.user.update({
            where: {
                id: Number(id),
            },
            data: {
                org_id: org_id,
                name: name,
                email: email,
                password: password,
                phone_no: phone_no,
                address: address,
                description: description,
                user_img: user_img,
                user_group_id: user_group_id,
                rfid_card_id: rfid_card_id,
                updatedAt: new Date(),
            },
        });
        if (!user) {
            return res.status(httpStatus.NOT_FOUND).send("User not found");
        }
        res.status(httpStatus.OK).send(user);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// delete a user
const deleteUser = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.delete({
            where: {
                id: Number(id),
            },
        });
        if (!user) {
            return res.status(httpStatus.NOT_FOUND).send("User not found");
        }
        res.status(httpStatus.OK).send("User deleted successfully");
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// bulk delete user
const bulkDeleteUser = async(req, res) => {
    try {
        const { ids } = req.body;
        const user = await prisma.user.deleteMany({
            where: {
                id: {
                    in: ids,
                },
            },
        });
        if (!user) {
            return res.status(httpStatus.NOT_FOUND).send("User not found");
        }
        res.status(httpStatus.OK).send("User deleted successfully");
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};



// Export all functions
module.exports = {
    createUser,
    getAllUsers,
    getUserByOrgId,
    getUserById,
    editUser,
    deleteUser,
    bulkDeleteUser
};
        