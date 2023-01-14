const httpStatus = require("http-status");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// id            Int       @default(autoincrement())
//   org_id        Int
//   org organization @relation(fields: [org_id], references: [id])
//   name          String    @db.VarChar(100)
//   description   String    @db.VarChar(255)
//   door_no       String    @db.VarChar(50)
//   updatedAt     DateTime?
//   createdAt     DateTime  @default(now())
// create a door
const createDoor = async (req, res) => {
    try {
        const { org_id, name, description, door_no} = req.body;
        if (!org_id || !name || !description || !door_no) {
            return res.status(httpStatus.BAD_REQUEST).send("Please provide all required fields");
        }
        const door = await prisma.doors.create({
            data: {
                org_id: org_id,
                name: name,
                description: description,
                door_no: door_no
            }
        });
        res.status(httpStatus.CREATED).send(door);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// get all doors
const getAllDoors = async (req, res) => {
    try {
        const doors = await prisma.doors.findMany();
        res.status(httpStatus.OK).send(doors);
    }
    catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

// get a door by id
const getDoorById = async (req, res) => {
    try {
        const { id } = req.params;
        const door = await prisma.doors.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (!door) {
            return res.status(httpStatus.NOT_FOUND).send("Door not found");
        }
        res.status(httpStatus.OK).send(door);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

// update a door by id
const editDoorById = async (req, res) => {
    try {
        const { id } = req.params;
        const { org_id, name, description, door_no } = req.body;
        const door = await prisma.doors.update({
            where: {
                id: Number(id),
            },
            data: {
                org_id: org_id,
                name: name,
                description: description,
                door_no: door_no,
                updatedAt: new Date(),
            },
        });
        res.status(httpStatus.OK).send(door);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

// delete a door by id
const deleteDoorById = async (req, res) => {
    try {
        const { id } = req.params;
        const door = await prisma.doors.delete({
            where: {
                id: Number(id),
            },
        });
        res.status(httpStatus.OK).send(door);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

    



module.exports = {
    createDoor,
    getAllDoors,
    getDoorById,
    editDoorById,
    deleteDoorById
    
};