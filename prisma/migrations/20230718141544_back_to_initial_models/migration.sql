/*
  Warnings:

  - You are about to drop the `Favorite` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Favorite` DROP FOREIGN KEY `Favorite_user_id_fkey`;

-- DropTable
DROP TABLE `Favorite`;

-- AddForeignKey
ALTER TABLE `Guitar` ADD CONSTRAINT `Guitar_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
