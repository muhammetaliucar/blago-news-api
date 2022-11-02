/*
  Warnings:

  - Added the required column `surname` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Author` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `surname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "surname" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "News" ADD COLUMN     "photo" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "photo" TEXT,
ADD COLUMN     "surname" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
