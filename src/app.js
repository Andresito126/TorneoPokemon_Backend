const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// // Cargar rutas
// app.use('/users', userRoutes);
// app.use('/ubications', ubicationRoutes);
// app.use('/flights',flightRoutes);
// app.use('/reservations', reservationRoutes)

module.exports = app;