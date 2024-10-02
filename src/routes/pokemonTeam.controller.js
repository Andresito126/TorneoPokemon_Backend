const express = require('express');
const router = express.Router();
const pokemonTeamController = require('../controllers/pokemonTeam.controller');

// Agregar un Pokemon a un equipo
router.post('/addPokemon', pokemonTeamController.addPokemonToTeam);

// Obtener todos los Pokemon de un equipo
router.get('/getPokemons/:team_id', pokemonTeamController.getPokemonsByTeamId);

// Eliminar un Pokemon de un equipo
router.delete('/removePokemon/:id', pokemonTeamController.removePokemonFromTeam);

module.exports = router;
