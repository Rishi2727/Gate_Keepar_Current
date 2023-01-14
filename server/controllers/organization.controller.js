const httpStatus = require("http-status");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();




const createOrg = async (req, res) => {
    // console.log(req.body);
    try {
        const { name, address, contact_no, contact_person, description,logo_image,} = req.body;
        if(!name || !address || !contact_no || !contact_person || !description ){
            return res.status(httpStatus.BAD_REQUEST).send("Please fill all the fields");
        }
        if(name.length < 3){
            return res.status(httpStatus.BAD_REQUEST).send("Name should be at least 3 characters long");
        }
        if(address.length < 3){
            return res.status(httpStatus.BAD_REQUEST).send("Address should be at least 3 characters long");
        }
        if(contact_no.length < 10 || contact_no.length > 10 ){
            return res.status(httpStatus.BAD_REQUEST).send("Contact number should be 10 digits long");
        }
        if(contact_person.length < 3){
            return res.status(httpStatus.BAD_REQUEST).send("Contact person should be at least 3 characters long");
        }
        const result = await prisma.organization.create({
            data: {
                name: name,
                address: address,
                contact_no: contact_no,
                contact_person: contact_person,
                description: description,
                logo_image: logo_image,
            },
        });
        res.status(httpStatus.CREATED).send(result);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};

// get all organization
const getAllOrg = async (req, res) => {
    try {
        const result = await prisma.organization.findMany();
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};

// get Api by id
const getOrgById = async (req, res) => {
    try {
        const result = await prisma.organization.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });
        if(!result){
            return res.status(httpStatus.NOT_FOUND).send("Organization not found");
        }
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};

// delete api
const deleteOrg = async (req, res) => {
    try {
        const result = await prisma.organization.delete({
            where: {
                id: Number(req.params.id),
            },
        });
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};


//edit api
const editOrg = async (req, res) => {
    try {
        const result = await prisma.organization.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                name: req.body.name,
                address: req.body.address,
                contact_no: req.body.contact_no,
                contact_person: req.body.contact_person,
                description: req.body.description,
                logo_image: req.body.logo_image,
                updatedAt: new Date(),
            },
        });
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
};

module.exports = {
    createOrg,
    getAllOrg,
    getOrgById,
    deleteOrg,
    editOrg,

}