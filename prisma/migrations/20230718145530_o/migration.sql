/*
  Warnings:

  - You are about to drop the column `userId` on the `Guitar` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Guitar` DROP FOREIGN KEY `Guitar_userId_fkey`;

-- AlterTable
ALTER TABLE `Guitar` DROP COLUMN `userId`,
    MODIFY `likes` INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE `_GuitarToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_GuitarToUser_AB_unique`(`A`, `B`),
    INDEX `_GuitarToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_GuitarToUser` ADD CONSTRAINT `_GuitarToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Guitar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GuitarToUser` ADD CONSTRAINT `_GuitarToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
