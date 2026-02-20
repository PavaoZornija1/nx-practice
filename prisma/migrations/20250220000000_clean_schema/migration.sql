-- Drop notes table if present (from previous setup)
DROP TABLE IF EXISTS "notes";

-- CreateTable (placeholder for Prisma client)
CREATE TABLE "_schema_version" (
    "id" TEXT NOT NULL,

    CONSTRAINT "_schema_version_pkey" PRIMARY KEY ("id")
);

INSERT INTO "_schema_version" ("id") VALUES ('1');
