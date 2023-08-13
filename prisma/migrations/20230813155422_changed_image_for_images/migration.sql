/*
  Warnings:

  - You are about to drop the column `image` on the `Guitar` table. All the data in the column will be lost.
  - Added the required column `images` to the `Guitar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Guitar` DROP COLUMN `image`,
    ADD COLUMN `images` VARCHAR(191) NOT NULL;