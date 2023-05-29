//fichier du lancement du serveur
//importation des modules
const express = require('express');
const cors = require('cors');
const server = express();
const port = 3000;

server.use(express.json());
server.use(cors());

const cardRoute = require('./routes/cardsRoutes');
server.use('/routes', cardRoute);

server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});