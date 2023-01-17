/*
  Warnings:

  - You are about to drop the `wg_local_config` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wg_manager` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wg_manager_group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wg_name_group_mst` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `wg_manager` DROP FOREIGN KEY `wg_manager_group_id_fkey`;

-- DropForeignKey
ALTER TABLE `wg_name_group_mst` DROP FOREIGN KEY `wg_name_group_mst_worker_id_fkey`;

-- DropTable
DROP TABLE `wg_local_config`;

-- DropTable
DROP TABLE `wg_manager`;

-- DropTable
DROP TABLE `wg_manager_group`;

-- DropTable
DROP TABLE `wg_name_group_mst`;
