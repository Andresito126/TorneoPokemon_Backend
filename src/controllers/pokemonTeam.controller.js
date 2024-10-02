const db = require('../models');
const PokemonTeam = db.PokemonTeam;
const https = require('https');

// crear una nueva relacion entre un equipo y un pokemon
exports.addPokemonToTeam = async (req, res) => {
    const { team_id, pokemon_id } = req.body;

    try {
        // obtener detalles del pokemon desde la pokeapi
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}`;
        
        https.get(url, (response) => {
            let data = '';

            // recibir datos
            response.on('data', (chunk) => {
                data += chunk;
            });

            // al finalizar la respuesta
            response.on('end', async () => {
                const pokemonData = JSON.parse(data);
                const pokemonName = pokemonData.name;

                // crear el pokemon en el equipo
                const newPokemonTeam = await PokemonTeam.create({
                    team_id,
                    pokemon_id,
                    pokemon_name: pokemonName // asignar el nombre del pokemon aqui
                });

                res.status(201).json(newPokemonTeam);
            });

        }).on('error', (error) => {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener el Pokémon de la API' });
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al agregar el Pokémon al equipo' });
    }
};

// get todos los Pokemon de un equipo especifico
exports.getPokemonsByTeamId = async (req, res) => {
    try {
        const { team_id } = req.params;
        const pokemons = await PokemonTeam.findAll({
            where: { team_id }
        });
        res.json(pokemons);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los Pokémon del equipo" });
    }
};

// delete un Pokemon de un equipo
exports.removePokemonFromTeam = async (req, res) => {
    try {
        const { id } = req.params; // id de la relacion en PokemonTeam

        const deleted = await PokemonTeam.destroy({
            where: { id_pokemon_team: id }
        });

        if (deleted) {
            return res.status(204).send();
        } else {
            return res.status(404).json({ error: 'Relación Pokemon-Equipo no encontrada' });
        }
    } catch (error) {
        console.error('Error al eliminar el Pokémon del equipo:', error);
        return res.status(500).json({ error: 'Error al eliminar el Pokémon del equipo' });
    }
};
