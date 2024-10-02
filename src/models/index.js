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
db.Team = require('./team.model')(sequelize, Sequelize);
db.trainer = require('./trainer.model')(sequelize,Sequelize);
db.PokemonTeam= require('./pokemonTeam.model')(sequelize,Sequelize)
module.exports = db;
