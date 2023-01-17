/*
  Warnings:

  - You are about to drop the column `port_no` on the `devices` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `devices` DROP COLUMN `port_no`,
    ADD COLUMN `port_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `ports` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `port` VARCHAR(100) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `devices` ADD CONSTRAINT `devices_port_id_fkey` FOREIGN KEY (`port_id`) REFERENCES `ports`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
