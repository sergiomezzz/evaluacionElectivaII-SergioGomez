const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Ruta para la página principal
router.get('/', (req, res) => {
    const charactersFilePath = path.join(__dirname, '../resources', 'data.json');
    fs.readFile(charactersFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading file');
            return;
        }
        const characters = JSON.parse(data);
        res.render('index', { characters });
    });
});

// Ruta para obtener los personajes en formato JSON
router.get('/api/characters', (req, res) => {
    
    fs.readFile(charactersFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading file');
            return;
        }
        res.json(JSON.parse(data));
    });
});

module.exports = router;
