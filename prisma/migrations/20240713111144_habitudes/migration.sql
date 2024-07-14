/*
  Warnings:

  - Added the required column `label` to the `Habitude` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Habitude" ADD COLUMN     "label" TEXT NOT NULL;
