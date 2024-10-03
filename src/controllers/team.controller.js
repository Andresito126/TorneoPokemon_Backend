const db = require('../models');
const Team = db.Team;

// create
exports.createTeam = async (req, res) => {
    console.log(req.body);  
    try {
        const newTeam = await Team.create(req.body);
        res.status(201).json(newTeam);
    } catch (error) {
        console.error('Error al crear el equipo:', error);  
        res.status(500).json({ error: 'Error al crear el equipo', details: error.message }); // detallar error
    }
};

//get all
exports.getAllTeams = async (req, res) => {
    try {
        const teams = await Team.findAll();
        res.json(teams);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: 'Error al obtener los equipos' });
    }
};

// get con id
exports.getTeamById = async (req, res) => {
    try {
        const team = await Team.findByPk(req.params.id);
        if (team) {
            res.status(200).json(team);
        } else {
            res.status(404).json({ error: 'Equipo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el equipo' });
    }
};

// update
exports.updateTeam = async (req, res) => {
    const { id } = req.params;
    const updatedTeamData = req.body;

    try {
        const [updatedRows] = await Team.update(updatedTeamData, {
            where: { id_team: id }
        });

        if (updatedRows === 0) {
            return res.status(404).json({ message: 'Equipo no encontrado' });
        }

        const updatedTeam = await Team.findByPk(id);
        res.status(200).json(updatedTeam);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el equipo' });
    }
};

// delete
exports.deleteTeam = async (req, res) => {
    try {
        const teamId = req.params.id;
        const deletedTeam = await Team.destroy({
            where: { id_team: teamId }
        });

        if (deletedTeam) {
            return res.status(204).send();
        } else {
            return res.status(404).json({ error: 'Equipo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el equipo' });
    }
};
