require('dotenv').config();
const mongoose = require('mongoose');

const dbCon = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conexión a la base de datos establecida');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    throw new Error('No se pudo conectar a la base de datos');
  }
};

module.exports = dbCon;
