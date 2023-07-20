/*
  Warnings:

  - You are about to drop the `_GuitarToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_GuitarToUser` DROP FOREIGN KEY `_GuitarToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_GuitarToUser` DROP FOREIGN KEY `_GuitarToUser_B_fkey`;

-- DropTable
DROP TABLE `_GuitarToUser`;

-- CreateTable
CREATE TABLE `UserFavorites` (
    `userId` VARCHAR(191) NOT NULL,
    `guitarId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
