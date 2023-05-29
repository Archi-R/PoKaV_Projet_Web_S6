//fichier du lancement du serveur
//importation des modules
const express = require('express');
const server = express();
const port = 3000;

let cardInfo = {
    title: 'Nom de la composition',
    gameType: 'holdEm',
    chipList: [
        {color: 'rouge', count: 10, value: 10},
        {color: 'bleu', count: 20, value: 20},
        // Ajoutez plus d'objets pour chaque couleur de jeton
    ],
    totalChips: 100,
    playerCount: 5,
    gameLength: 'courte',
};

server.use(express.json());

server.post('/update-card', (req, res) => {
    const { title, gameType, chipList, totalChips, playerCount, gameLength } = req.body;

    cardInfo.title = title;
    cardInfo.gameType = gameType;
    cardInfo.chipList = chipList;
    cardInfo.totalChips = totalChips;
    cardInfo.playerCount = playerCount;
    cardInfo.gameLength = gameLength;

    res.send('Card information updated successfully');
});

server.get('/get-card', (req, res) => {
    res.send(cardInfo);
    console.log(cardInfo);
});

server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});