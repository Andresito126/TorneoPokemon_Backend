const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainer.controller');

// create un nuevo entrenador
router.post('/addTrainer', trainerController.createTrainer);

// get todos los entrenadores
router.get('/getTrainers', trainerController.getAllTrainers);

// get un entrenador por ID
router.get('/getTrainer/:id', trainerController.getTrainerById);

// borrar
router.delete('/deleteTrainer/:id', trainerController.deleteTrainer);

//edit
router.put('/updateTrainer/:id_trainer', trainerController.updateTrainer);

module.exports = router;
