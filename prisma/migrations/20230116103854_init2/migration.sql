/*
  Warnings:

  - You are about to drop the column `device_id` on the `device_log` table. All the data in the column will be lost.
  - You are about to drop the `devices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ports` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `device_log` DROP FOREIGN KEY `device_log_device_id_fkey`;

-- DropForeignKey
ALTER TABLE `devices` DROP FOREIGN KEY `devices_device_typ_fkey`;

-- DropForeignKey
ALTER TABLE `devices` DROP FOREIGN KEY `devices_door_id_fkey`;

-- DropForeignKey
ALTER TABLE `devices` DROP FOREIGN KEY `devices_org_id_fkey`;

-- AlterTable
ALTER TABLE `device_log` DROP COLUMN `device_id`;

-- AlterTable
ALTER TABLE `devices_setup` ADD COLUMN `devicesType` INTEGER NULL,
    ADD COLUMN `door_id` INTEGER NULL;

-- DropTable
DROP TABLE `devices`;

-- DropTable
DROP TABLE `ports`;

-- AddForeignKey
ALTER TABLE `devices_setup` ADD CONSTRAINT `devices_setup_devicesType_fkey` FOREIGN KEY (`devicesType`) REFERENCES `device_type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `devices_setup` ADD CONSTRAINT `devices_setup_door_id_fkey` FOREIGN KEY (`door_id`) REFERENCES `doors`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
