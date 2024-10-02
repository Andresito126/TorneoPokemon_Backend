const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainer.controller');

// Crear un nuevo entrenador
router.post('/addTrainer', trainerController.createTrainer);

// Obtener todos los entrenadores
router.get('/getTrainers', trainerController.getAllTrainers);

// Obtener un entrenador por ID
router.get('/getTrainer/:id', trainerController.getTrainerById);

// borrar
router.delete('/deleteTrainer/:id', trainerController.deleteTrainer);

//edit
router.put('/updateTrainer/:id_trainer', trainerController.updateTrainer);

module.exports = router;
