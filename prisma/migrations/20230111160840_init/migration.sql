-- AlterTable
ALTER TABLE `devices` ADD COLUMN `door_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `devices` ADD CONSTRAINT `devices_door_id_fkey` FOREIGN KEY (`door_id`) REFERENCES `doors`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
