-- CreateTable
CREATE TABLE "Operaria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "codigo" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Operaria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegistroTiempos" (
    "id" SERIAL NOT NULL,
    "operariaId" INTEGER NOT NULL,
    "proceso" TEXT NOT NULL,
    "condicion" TEXT NOT NULL,
    "tiempo1" TEXT NOT NULL,
    "tiempo2" TEXT NOT NULL,
    "tiempo3" TEXT NOT NULL,
    "tiempo4" TEXT NOT NULL,
    "tiempo5" TEXT NOT NULL,
    "tiempo6" TEXT,
    "tiempo7" TEXT,
    "tiempo8" TEXT,
    "tiempo9" TEXT,
    "tiempo10" TEXT,
    "promedioSegundos" DOUBLE PRECISION NOT NULL,
    "promedioMinutos" DOUBLE PRECISION NOT NULL,
    "promedioSegAjustado" DOUBLE PRECISION NOT NULL,
    "promedioMinAjustado" DOUBLE PRECISION NOT NULL,
    "produccionPorHora" DOUBLE PRECISION NOT NULL,
    "produccionConMitad" DOUBLE PRECISION NOT NULL,
    "produccionConTotal" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RegistroTiempos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Operaria_codigo_key" ON "Operaria"("codigo");

-- AddForeignKey
ALTER TABLE "RegistroTiempos" ADD CONSTRAINT "RegistroTiempos_operariaId_fkey" FOREIGN KEY ("operariaId") REFERENCES "Operaria"("id") ON DELETE CASCADE ON UPDATE CASCADE;
