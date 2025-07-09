const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('./generated/prisma');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://stellular-baklava-aac095.netlify.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

// Middleware para asegurar que los encabezados CORS estén en todas las respuestas
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin === 'https://stellular-baklava-aac095.netlify.app' 
    ? 'https://stellular-baklava-aac095.netlify.app' 
    : 'http://localhost:5173');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// Rutas API para Operarias
app.get('/api/operarias', async (req, res) => {
  try {
    const operarias = await prisma.operaria.findMany();
    // Obtener el número de registros por cada operaria
    const operariasConRegistros = await Promise.all(
      operarias.map(async (operaria) => {
        const registrosCount = await prisma.registroTiempos.count({
          where: { operariaId: operaria.id }
        });
        return { ...operaria, registros: registrosCount };
      })
    );
    res.json(operariasConRegistros);
  } catch (error) {
    console.error('Error al obtener operarias:', error);
    res.status(500).json({ error: 'Error al obtener operarias' });
  }
});

app.post('/api/operarias', async (req, res) => {
  try {
    const { nombre, codigo } = req.body;
    
    // Validar datos
    if (!nombre) {
      return res.status(400).json({ error: 'El nombre es obligatorio' });
    }

    // Verificar si ya existe un código igual (solo si se proporciona código)
    if (codigo && codigo.trim() !== '') {
      const existeCodigo = await prisma.operaria.findUnique({
        where: { codigo }
      });
      if (existeCodigo) {
        return res.status(400).json({ error: 'Ya existe una operaria con este código' });
      }
    }

    const nuevaOperaria = await prisma.operaria.create({
      data: {
        nombre,
        codigo: codigo && codigo.trim() !== '' ? codigo : null,
        activo: true
      }
    });
    res.status(201).json(nuevaOperaria);
  } catch (error) {
    console.error('Error al crear operaria:', error);
    res.status(500).json({ error: 'Error al crear operaria' });
  }
});

app.get('/api/operarias/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const operaria = await prisma.operaria.findUnique({
      where: { id: Number(id) }
    });
    
    if (!operaria) {
      return res.status(404).json({ error: 'Operaria no encontrada' });
    }
    
    res.json(operaria);
  } catch (error) {
    console.error('Error al obtener operaria:', error);
    res.status(500).json({ error: 'Error al obtener operaria' });
  }
});

app.put('/api/operarias/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, codigo, activo } = req.body;
    
    // Validar datos
    if (!nombre) {
      return res.status(400).json({ error: 'El nombre es obligatorio' });
    }

    // Verificar si ya existe un código igual (solo si se proporciona código)
    if (codigo) {
      const existeCodigo = await prisma.operaria.findFirst({
        where: { 
          codigo, 
          id: { not: Number(id) } 
        }
      });
      if (existeCodigo) {
        return res.status(400).json({ error: 'Ya existe una operaria con este código' });
      }
    }

    const operariaActualizada = await prisma.operaria.update({
      where: { id: Number(id) },
      data: {
        nombre,
        codigo,
        activo: activo !== undefined ? activo : true
      }
    });
    
    res.json(operariaActualizada);
  } catch (error) {
    console.error('Error al actualizar operaria:', error);
    res.status(500).json({ error: 'Error al actualizar operaria' });
  }
});

app.delete('/api/operarias/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { forzarEliminacion } = req.query;
    
    // Verificar si la operaria tiene registros asociados
    const tieneRegistros = await prisma.registroTiempos.findFirst({
      where: { operariaId: Number(id) }
    });
    
    // Si tiene registros y no se solicita forzar la eliminación, devolver error
    if (tieneRegistros && forzarEliminacion !== 'true') {
      return res.status(400).json({ 
        error: 'La operaria tiene registros asociados. Para eliminarla junto con sus registros, confirme la operación.',
        tieneRegistros: true
      });
    }
    
    // Si se solicita forzar la eliminación, eliminar primero los registros asociados
    if (tieneRegistros && forzarEliminacion === 'true') {
      await prisma.registroTiempos.deleteMany({
        where: { operariaId: Number(id) }
      });
    }
    
    // Eliminar la operaria
    await prisma.operaria.delete({
      where: { id: Number(id) }
    });
    
    res.json({ 
      message: tieneRegistros && forzarEliminacion === 'true' 
        ? 'Operaria y sus registros eliminados correctamente' 
        : 'Operaria eliminada correctamente'
    });
  } catch (error) {
    console.error('Error al eliminar operaria:', error);
    res.status(500).json({ error: 'Error al eliminar operaria' });
  }
});

// Rutas API para Registros de Tiempos
app.get('/api/registros', async (req, res) => {
  try {
    const registros = await prisma.registroTiempos.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(registros);
  } catch (error) {
    console.error('Error al obtener registros:', error);
    res.status(500).json({ error: 'Error al obtener registros' });
  }
});

app.post('/api/registros', async (req, res) => {
  try {
    const { 
      operariaId, proceso, condicion, 
      tiempo1, tiempo2, tiempo3, tiempo4, tiempo5,
      tiempo6, tiempo7, tiempo8, tiempo9, tiempo10,
      promedioSegundos, promedioMinutos, 
      promedioSegAjustado, promedioMinAjustado,
      produccionPorHora, produccionConMitad, produccionConTotal
    } = req.body;
    
    // Validar datos
    if (!operariaId || !proceso || !condicion || !tiempo1 || !tiempo2 || !tiempo3 || !tiempo4 || !tiempo5) {
      return res.status(400).json({ error: 'Todos los campos obligatorios deben ser proporcionados' });
    }

    // Verificar si la operaria existe
    const operaria = await prisma.operaria.findUnique({
      where: { id: Number(operariaId) }
    });
    
    if (!operaria) {
      return res.status(400).json({ error: 'La operaria no existe' });
    }
    
    const nuevoRegistro = await prisma.registroTiempos.create({
      data: {
        operariaId: Number(operariaId),
        proceso,
        condicion,
        tiempo1,
        tiempo2,
        tiempo3,
        tiempo4,
        tiempo5,
        tiempo6: tiempo6 || null,
        tiempo7: tiempo7 || null,
        tiempo8: tiempo8 || null,
        tiempo9: tiempo9 || null,
        tiempo10: tiempo10 || null,
        promedioSegundos,
        promedioMinutos,
        promedioSegAjustado,
        promedioMinAjustado,
        produccionPorHora,
        produccionConMitad,
        produccionConTotal
      }
    });
    
    res.status(201).json(nuevoRegistro);
  } catch (error) {
    console.error('Error al crear registro:', error);
    res.status(500).json({ error: 'Error al crear registro' });
  }
});

app.get('/api/registros/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const registro = await prisma.registroTiempos.findUnique({
      where: { id: Number(id) }
    });
    
    if (!registro) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
    
    res.json(registro);
  } catch (error) {
    console.error('Error al obtener registro:', error);
    res.status(500).json({ error: 'Error al obtener registro' });
  }
});

// Eliminar un registro de tiempos
app.delete('/api/registros/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Verificar si el registro existe
    const registro = await prisma.registroTiempos.findUnique({
      where: { id: Number(id) }
    });
    
    if (!registro) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
    
    // Eliminar el registro
    const registroEliminado = await prisma.registroTiempos.delete({
      where: { id: Number(id) }
    });
    
    res.json({ message: 'Registro eliminado correctamente', id: Number(id) });
  } catch (error) {
    console.error('Error al eliminar registro:', error);
    res.status(500).json({ error: 'Error al eliminar registro' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

// Manejar cierre para liberar conexiones de Prisma
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});
