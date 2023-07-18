-- DropIndex
DROP INDEX `Guitar_userId_fkey` ON `Guitar`;

-- AlterTable
ALTER TABLE `Favorite` MODIFY `id` INTEGER NOT NULL;
