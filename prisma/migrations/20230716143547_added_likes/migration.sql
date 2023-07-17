/*
  Warnings:

  - Added the required column `likes` to the `Guitar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Guitar` ADD COLUMN `likes` INTEGER NOT NULL;
