/*
  Warnings:

  - You are about to drop the column `assignTo` on the `BoardTicket` table. All the data in the column will be lost.
  - Added the required column `assignedTo` to the `BoardTicket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BoardTicket" DROP CONSTRAINT "BoardTicket_assignTo_fkey";

-- AlterTable
ALTER TABLE "BoardTicket" DROP COLUMN "assignTo",
ADD COLUMN     "assignedTo" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "BoardTicket" ADD CONSTRAINT "BoardTicket_assignedTo_fkey" FOREIGN KEY ("assignedTo") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
