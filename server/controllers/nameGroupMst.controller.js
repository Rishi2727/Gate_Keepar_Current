const httpStatus = require("http-status");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// add group Api
const createGroupMst = async(req, res)=>{
    // console.log(req.body);
    try{
        const { group_type, description, group_name, worker_id} = req.body;
        const groupMst = await prisma.wg_name_group_mst.create({
            data: {
                group_type: group_type,
                description: description,
                group_name: group_name,
                worker_id: Number(worker_id),
            }
        });
        res.status(httpStatus.CREATED).send(groupMst);
    }catch{
        res.status(httpStatus.NOT_FOUND).send("Not Found");
    }
}

// get Api
const getGroupMst = async (req, res) => {
    try {
        const groupMst = await prisma.wg_name_group_mst.findMany();
        // manager name from wg_manager table
        const groupMstWithManagerName = await Promise.all(
            groupMst.map(async (item) => {
                const manager = await prisma.wg_manager.findUnique({
                    where: {
                        manager_id: item.worker_id,
                    },
                });
                return {
                    ...item,
                    manager_name: manager.manager_name,
                };
            })
        );
        res.status(httpStatus.OK).send(groupMstWithManagerName);
    } catch {
        res.status(httpStatus.NOT_FOUND).send("Not Found");
    }
};

// get Api by id
const getGroupMstById = async (req, res) => {
    try {
        const groupMst = await prisma.wg_name_group_mst.findUnique({
            where: {
                group_no: Number(req.params.id),
            },
        });
        const manager = await prisma.wg_manager.findUnique({
            where: {
                manager_id: groupMst.worker_id,
            },
        });
        const groupMstWithManagerName = {
            ...groupMst,
            manager_name: manager.manager_name,
        };
        res.status(httpStatus.OK).send(groupMstWithManagerName);

    } catch {
        res.status(httpStatus.NOT_FOUND).send("Not Found");
    }
};

// edit Api
const editGroupMst = async (req, res) => {
    try {
        const { group_type, description, group_name, worker_id } = req.body;
        const groupMst = await prisma.wg_name_group_mst.update({
            where: {
                group_no: Number(req.params.id),
            },
            data: {
                group_type: group_type,
                description: description,
                group_name: group_name,
                worker_id: Number(worker_id),
                updatedAt: new Date(),
            },
        });
        res.status(httpStatus.OK).send(groupMst);
    } catch {
        res.status(httpStatus.NOT_FOUND).send("Not Found");
    }
};

// delete Api
const deleteGroupMst = async (req, res) => {
    try {
        const groupMst = await prisma.wg_name_group_mst.delete({
            where: {
                group_no: Number(req.params.id),
            },
        });
        res.status(httpStatus.OK).send(groupMst);
    } catch {
        res.status(httpStatus.NOT_FOUND).send("Not Found");
    }
};


module.exports = {
    createGroupMst,
    getGroupMst,
    getGroupMstById,
    editGroupMst,
    deleteGroupMst,
}