-- AlterTable
ALTER TABLE "News" ADD COLUMN     "categoryId" INTEGER;

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
