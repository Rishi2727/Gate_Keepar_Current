/*
  Warnings:

  - You are about to drop the column `groupId` on the `organization_group` table. All the data in the column will be lost.
  - Added the required column `name` to the `organization_group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `org_id` to the `organization_group` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `organization_group` DROP FOREIGN KEY `organization_group_groupId_fkey`;

-- AlterTable
ALTER TABLE `organization_group` DROP COLUMN `groupId`,
    ADD COLUMN `name` VARCHAR(100) NOT NULL,
    ADD COLUMN `org_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `organization_group` ADD CONSTRAINT `organization_group_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `organization`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
