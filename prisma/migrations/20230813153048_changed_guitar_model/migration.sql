/*
  Warnings:

  - Added the required column `default_price` to the `Guitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Guitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metadata` to the `Guitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Guitar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Guitar` ADD COLUMN `default_price` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `metadata` JSON NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `unit_amount` INTEGER NULL;
