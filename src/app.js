const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  
const trainerRoutes = require('./routes/trainer.controller'); 

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Cargar rutas

app.use('/trainer', trainerRoutes); 

module.exports = app;
