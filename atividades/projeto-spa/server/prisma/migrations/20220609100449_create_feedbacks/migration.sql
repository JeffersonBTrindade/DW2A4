/*
  Warnings:

  - Added the required column `email` to the `feedbacks` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_feedbacks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "screenshot" TEXT
);
INSERT INTO "new_feedbacks" ("comment", "id", "screenshot", "type") SELECT "comment", "id", "screenshot", "type" FROM "feedbacks";
DROP TABLE "feedbacks";
ALTER TABLE "new_feedbacks" RENAME TO "feedbacks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
