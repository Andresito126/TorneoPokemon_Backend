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

// Establecer las relaciones

db.trainer.hasMany(db.Team, { foreignKey: 'trainer_id' });
db.Team.belongsTo(db.trainer, { foreignKey: 'trainer_id' });
db.Team.hasMany(db.PokemonTeam, { foreignKey: 'team_id' });
db.PokemonTeam.belongsTo(db.Team, { foreignKey: 'team_id' });