const express = require('express');
const router = express.Router();
const pokemonTeamController = require('../controllers/pokemonTeam.controller');


router.get('/getPokemonsByTeamId/:team_id', pokemonTeamController.getPokemonsByTeamId);

// delete un pokemon de un equipo

router.delete('/removePokemonFromTeam/:id', pokemonTeamController.removePokemonFromTeam);

//add pokemon al euqipo
router.post('/addPokemonToTeam', pokemonTeamController.addPokemonToTeam);

module.exports = router;

