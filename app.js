require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/routes.js');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
