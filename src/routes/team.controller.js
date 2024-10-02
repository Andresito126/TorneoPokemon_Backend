const express = require('express');
const router = express.Router();
const teamController = require('../controllers/team.controller');


// crear un nuevo entrenador
router.post('/addTeam', teamController.createTeam);

// obtener todos los entrenadores
router.get('/getTeams', teamController.getAllTeams);

// obtener un entrenador por ID
router.get('/getTeam/:id', teamController.getTeamById);

// borrar
router.delete('/deleteTeam/:id', teamController.deleteTeam);

// edit
router.put('/updateTeam/:id', teamController.updateTeam);


module.exports = router;
