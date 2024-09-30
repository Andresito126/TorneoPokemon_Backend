const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const db = {};
db.ORM = Sequelize;
db.connection = sequelize;

// Importar modelos

// Configurar asociaciones
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
      db[modelName].associate(db);
  }
});

module.exports = db;
