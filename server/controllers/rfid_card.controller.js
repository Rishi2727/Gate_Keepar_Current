const httpStatus = require("http-status");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// create rfid card
const addRfidCard = async(req, res) => {
    console.log(req.body);
    try {
        const { card_no, description, isActive } = req.body;
        if(!card_no || !description ){
            return res.status(httpStatus.BAD_REQUEST).send("Please fill all the fields");
        }
        const rfidCard = await prisma.rfid_card.create({
            data: {
                card_no: card_no,
                description: description,
                isActive: isActive,
            },
        });
        res.status(httpStatus.CREATED).send(rfidCard);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// get all rfid cards
const getAllRfidCards = async(req, res) => {
    try {
        const rfidCards = await prisma.rfid_card.findMany();
        res.status(httpStatus.OK).send(rfidCards);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }   
};

// get a rfid card by id
const getRfidCardById = async(req, res) => {
    try {
        const { id } = req.params;
        const rfidCard = await prisma.rfid_card.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (!rfidCard) {
            return res.status(httpStatus.NOT_FOUND).send("Rfid Card not found");
        }
        res.status(httpStatus.OK).send(rfidCard);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// update a rfid card by id
const editRfidCard = async(req, res) => {
    try {
        const { id } = req.params;
        const { card_no, description, isActive } = req.body;
        const rfidCard = await prisma.rfid_card.update({
            where: {
                id: Number(id),
            },
            data: {
                card_no: card_no,
                description: description,
                isActive: isActive,
                updatedAt: new Date(),
            },
        });
        if (!rfidCard) {
            return res.status(httpStatus.NOT_FOUND).send("Rfid Card not found");
        }
        res.status(httpStatus.OK).send(rfidCard);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

// delete a rfid card by id
const deleteRfidCard = async(req, res) => {
    try {
        const { id } = req.params;
        const rfidCard = await prisma.rfid_card.delete({
            where: {
                id: Number(id),
            },
        });
        if (!rfidCard) {
            return res.status(httpStatus.NOT_FOUND).send("Rfid Card not found");
        }
        res.status(httpStatus.OK).send(rfidCard);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

module.exports = {
    addRfidCard,
    getAllRfidCards,
    getRfidCardById,
    editRfidCard,
    deleteRfidCard,

}