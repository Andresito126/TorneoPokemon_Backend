const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  
const trainerRoutes = require('./routes/trainer.controller'); 
const teamRoutes = require('./routes/team.controller')
const pokemonTeamRoutes = require('./routes/pokemonTeam.controller');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Cargar rutas

app.use('/trainer', trainerRoutes); 
app.use('/team', teamRoutes); 
app.use('/pokemonTeam', pokemonTeamRoutes);

module.exports = app;
