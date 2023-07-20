/*
  Warnings:

  - You are about to drop the `_GuitarToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `favorites` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_GuitarToUser` DROP FOREIGN KEY `_GuitarToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_GuitarToUser` DROP FOREIGN KEY `_GuitarToUser_B_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `favorites` JSON NOT NULL;

-- DropTable
DROP TABLE `_GuitarToUser`;
