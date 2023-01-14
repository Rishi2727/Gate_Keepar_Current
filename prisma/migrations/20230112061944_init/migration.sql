/*
  Warnings:

  - A unique constraint covering the columns `[id,rfid_card_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `user_id_rfid_card_id_key` ON `user`(`id`, `rfid_card_id`);
