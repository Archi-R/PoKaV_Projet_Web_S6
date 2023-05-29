
const express = require('express');
const router = express.Router();
const db = require('../database.js');

router.get('/get-all-cards', async (req, res) => {
    let conn;
    try {
        conn = await db.createConnection();
        const rows = await conn.query("SELECT * FROM compositions");
        const chips = await conn.query("SELECT compositionId, color, count, value FROM jetons");
        for (let i = 0; i < rows.length; i++) {
            rows[i].totalChips = 0;
            rows[i].chipList = [];
            for (let j = 0; j < chips.length; j++) {
                if(rows[i].id === chips[j].compositionId) {
                    rows[i].totalChips += chips[j].count;
                    delete chips[j].compositionId;
                    delete chips[j].id;
                    rows[i].chipList.push(chips[j]);
                }
            }
            delete rows[i].id;
            rows[i].totalChips *= rows[i].playerCount;
            console.log(rows[i]);
        }
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

 */