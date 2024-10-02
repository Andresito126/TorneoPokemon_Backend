const db = require('../models'); 
const Trainer = db.trainer; 

// crear un nuevo entrenador
exports.createTrainer = async (req, res) => {
    try {
        console.log('Request Body:', req.body);
        const newTrainer = await Trainer.create(req.body);
        res.status(201).json(newTrainer);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: 'Error al crear el entrenador' });
    }
};

// get todos los entrenadores
exports.getAllTrainers = async (req, res) => {
    try {
        const trainers = await Trainer.findAll(); 
        res.json(trainers);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: "Error al obtener los entrenadores" });
    }
};

// get un entrenador por ID
exports.getTrainerById = async (req, res) => {
    try {
        const trainer = await Trainer.findByPk(req.params.id);
        if (trainer) {
            res.status(200).json(trainer);
        } else {
            res.status(404).json({ error: 'Entrenador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el entrenador' });
    }
};

// delete trainer
exports.deleteTrainer = async (req, res) => {
    try {
        const trainerId = req.params.id;
        const deletedTrainer = await Trainer.destroy({
            where: { id_trainer: trainerId } 
        });

        if (deletedTrainer) {
           
            return res.status(204).send();
        } else {
            
            return res.status(404).json({ error: 'Entrenador no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar el entrenador:', error);
        return res.status(500).json({ error: 'Error al eliminar el entrenador' });
    }
};
