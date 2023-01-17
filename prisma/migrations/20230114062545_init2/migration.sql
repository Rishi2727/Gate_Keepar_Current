/*
  Warnings:

  - You are about to drop the column `port_id` on the `devices` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `devices` DROP FOREIGN KEY `devices_port_id_fkey`;

-- AlterTable
ALTER TABLE `devices` DROP COLUMN `port_id`,
    ADD COLUMN `port_no` VARCHAR(50) NULL;
