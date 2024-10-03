const express = require('express');
const router = express.Router();
const teamController = require('../controllers/team.controller');

// create un nuevo equipo
router.post('/addTeam', teamController.createTeam);

// get todos los equipos
router.get('/getTeams', teamController.getAllTeams);

// get un equipo por id
router.get('/getTeam/:id', teamController.getTeamById);

// update un equipo
router.put('/updateTeam/:id', teamController.updateTeam);

// delete un equipo
router.delete('/deleteTeam/:id', teamController.deleteTeam);

module.exports = router;
