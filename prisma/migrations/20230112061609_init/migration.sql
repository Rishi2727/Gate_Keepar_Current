/*
  Warnings:

  - You are about to drop the column `barcode` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `card_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `qr_code` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `barcode`,
    DROP COLUMN `card_id`,
    DROP COLUMN `qr_code`,
    ADD COLUMN `rfid_card_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `rfid_card` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `card_no` VARCHAR(100) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_rfid_card_id_fkey` FOREIGN KEY (`rfid_card_id`) REFERENCES `rfid_card`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
