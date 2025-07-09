const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function main() {
  try {
    const count = await prisma.operaria.count();
    console.log('Conexión exitosa! Cantidad de operarias:', count);
  } catch (error) {
    console.error('Error de conexión:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
