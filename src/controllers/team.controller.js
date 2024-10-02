const db = require('../models'); 
const Team = db.Team; 

// crear un nuevo equipo
exports.createTeam = async (req, res) => {
    try {
        console.log('Request Body:', req.body);
        const newTeam = await Team.create(req.body);
        res.status(201).json(newTeam);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el equipo' });
    }
};

// obtener todos los equipos
exports.getAllTeams = async (req, res) => {
    try {
        const teams = await Team.findAll();
        res.json(teams);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los equipos" });
    }
};

// obtener un equipo por ID
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

// eliminar un equipo
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
        console.error('Error al eliminar el equipo:', error);
        return res.status(500).json({ error: 'Error al eliminar el equipo' });
    }
};

// actualizar un equipo
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

        // obtener el equipo actualizado y devolverlo
        const updatedTeam = await Team.findByPk(id);
        res.status(200).json(updatedTeam);
    } catch (error) {
        console.error('Error al actualizar el equipo:', error);
        res.status(500).json({ message: 'Error al actualizar el equipo' });
    }
};
