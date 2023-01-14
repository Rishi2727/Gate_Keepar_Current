const httpStatus = require("http-status");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// post Api createManagerGroup
/*{
    "group_name": "Admin",
    "group_desc": "admin control group"
    
}*/
const createManagerGroup = async (req, res) => {
  try {
    const { group_name, group_desc } = req.body;
    const managerGroup = await prisma.wg_manager_group.create({
      data: {
        group_name: group_name,
        group_desc: group_desc,
      },
    });
    res.status(httpStatus.CREATED).send(managerGroup);
  } catch {
    res.status(httpStatus.NOT_FOUND).send("Not Found");
  }
};

// get Api
const getManagerGroup = async (req, res) => {
  try {
    const managerGroup = await prisma.wg_manager_group.findMany();
    res.status(httpStatus.OK).send(managerGroup);
  } catch {
    res.status(httpStatus.NOT_FOUND).send("Not Found");
  }
};
// get Api by id
const getManagerGroupById = async (req, res) => {
  try {
    const managerGroup = await prisma.wg_manager_group.findUnique({
      where: {
        group_id: Number(req.params.id),
      },
    });
    res.status(httpStatus.OK).send(managerGroup);
  } catch {
    res.status(httpStatus.NOT_FOUND).send("Not Found");
  }
};

//edit Api
const editManagerGroup = async (req, res) => {
  console.log(req.params.id);
  try {
    const { group_name, group_desc } = req.body;
    console.log(group_name, group_desc);
    const managerGroup = await prisma.wg_manager_group.update({
      where: {
        group_id: Number(req.params.id),
      },
      data: {
        group_name: group_name,
        group_desc: group_desc,
        updatedAt: new Date(),
      },
    });
    console.log(managerGroup);
    res.status(httpStatus.OK).send(managerGroup);
  } catch {
    res.status(httpStatus.NOT_FOUND).send("Not Found");
  }
};

//delete api
const deleteManagerGroup = async (req, res) => {
  try {
    const managerGroup = await prisma.wg_manager_group.delete({
      where: {
        group_id: Number(req.params.id),
      },
    });
    res.status(httpStatus.OK).send(managerGroup);
  } catch {
    res.status(httpStatus.NOT_FOUND).send("Not Found");
  }
};

module.exports = {
  createManagerGroup,
  getManagerGroup,
  getManagerGroupById,
  editManagerGroup,
  deleteManagerGroup,
};
