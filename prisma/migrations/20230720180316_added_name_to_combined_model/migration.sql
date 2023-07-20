/*
  Warnings:

  - The primary key for the `UserFavorites` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `UserFavorites` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`userId`, `guitarId`);
