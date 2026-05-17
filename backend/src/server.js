const express = require('express');

require('mandatoryenv').load([
    'PORT',
]);
const { PORT } = process.env;

// Instantiate an Express Application
const app = express();

// Configure Express App Instance
app.use(express.json());

// 1. VALID ROUTES FIRST
app.get('/', (req, res) => res.send('Home'));

// Open Server on selected Port
app.listen(
    PORT,
    () => console.info('Server listening on port', PORT)
);