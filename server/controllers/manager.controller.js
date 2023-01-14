const httpStatus = require("http-status");;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/*
    "manager_name":"Wise Neosco",
    "manager_password":"123456H",
    "auth_id":"1",
    "manager_group_id":"3",
    "manager_phone_no":"1234567890",
    "manager_desc":"this is admin id"
*/
//post api request
const createManager = async (req, res) => {
  console.log(req.body);
  try {
    const {
      manager_name,
      manager_password,
      auth_id,
      manager_group_id,
      manager_phone_no,
      manager_desc,
    } = req.body;
    const manager = await prisma.wg_manager.create({
      data: {
        manager_name: manager_name,
        manager_pwd: manager_password,
        auth_id: Number(auth_id),
        group_id: Number(manager_group_id),
        manager_phone_no: manager_phone_no,
        manager_desc: manager_desc,
        worker_id: Math.random().toString(36).substr(2, 11),
      },
    });
    res.status(httpStatus.CREATED).send(manager);
  } catch {
    res.status(httpStatus.NOT_FOUND).send("Not Found");
  }
};

// get all manager data
const getManager = async (req, res) => {
  try {
    const manager = await prisma.wg_manager.findMany();
    // add group name to manager data
    const managerWithGroupName = await Promise.all(
      manager.map(async (item) => {
        const group = await prisma.wg_manager_group.findUnique({
          where: {
            group_id: item.group_id,
          },
        });
        return {
          ...item,
          group_name: group.group_name,
        };
      })
    );
    res.status(httpStatus.OK).send(managerWithGroupName);
  } catch {
    res.status(httpStatus.NOT_FOUND).send("Not Found");
  }
};


// get Api by id
const getManagerById = async (req, res) => {
  try {
    const manager = await prisma.wg_manager.findUnique({
      where: {
        manager_id: Number(req.params.id),
      },
    });
    res.status(httpStatus.OK).send(manager);
  } catch {
    res.status(httpStatus.NOT_FOUND).send("Not Found");
  }
};

//edit Api
const editManager = async (req, res) => {
  console.log(req.params.id, req.body);
  try {
    const {
      manager_name,
      auth_id,
      manager_group_id,
      manager_phone_no,
      manager_desc,
    } = req.body;
    console.log(manager_name, auth_id, manager_group_id, manager_phone_no, manager_desc);
    const manager = await prisma.wg_manager.update({
      where: {
        manager_id: Number(req.params.id),
      },
      data: {
        manager_name: manager_name,
        auth_id: Number(auth_id),
        group_id: Number(manager_group_id),
        manager_phone_no: manager_phone_no,
        manager_desc: manager_desc,
        updatedAt: new Date(),
      },
    });
    res.status(httpStatus.OK).send(manager);
  } catch {
    res.status(httpStatus.NOT_FOUND).send("Not Found");
  }
};

//delete Api
const deleteManager = async (req, res) => {
  try {
    const manager = await prisma.wg_manager.delete({
      where: {
        manager_id: Number(req.params.id),
      },
    });
    res.status(httpStatus.OK).send(manager);
  } catch {
    res.status(httpStatus.NOT_FOUND).send("Not Found");
  }
};

module.exports = {
  createManager,
  getManager,
  getManagerById,
  editManager,
  deleteManager,
};

