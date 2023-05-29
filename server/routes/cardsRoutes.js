
const express = require('express');
const router = express.Router();
const db = require('../database.js');

//juste pour tester
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
router.get('/get-all-cards', async (req, res) => {
    let conn;
    try {
        conn = await db.createConnection();
        //const rows = await conn.query("SELECT * FROM compositions");
        // faire une requête SQL pour obtenir les données d'une composition
        res.status(200).json(rows);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    } finally {
        if (conn) conn.end();
    }
});

router.post('/create-card', async (req, res) => {
    //for Théo le sac
});




module.exports = router;



/* anciens trucs


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
    res.status(200).json(cardInfo);
    console.log(cardInfo);
});

 */