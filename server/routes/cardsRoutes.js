
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
            //foreach chip
            for (let j = 0; j < chips.length; j++) {
                if(rows[i].id === chips[j].compositionId) {
                    if (chips[j].value !== 0){
                        rows[i].totalChips += chips[j].count;
                        delete chips[j].compositionId;
                        delete chips[j].id;
                        rows[i].chipList.push(chips[j]);
                    }
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
    const { title, gameType, chipList, playerCount, gameLength } = req.body;
    let conn;
    try {
        conn = await db.createConnection();
        const idmax = await conn.query("SELECT MAX(id) FROM compositions");
        const id = idmax[0]['MAX(id)'] + 1;

        console.log("idmax : " + id);

        const rows = await conn.query("INSERT INTO compositions (title, gameType, playerCount, gameLength) VALUES (?, ?, ?, ?)", [title, gameType, playerCount, gameLength]);
        for (let i = 0; i < chipList.length; i++) {
            await conn.query("INSERT INTO jetons (compositionId, color, count, value) VALUES (?, ?, ?, ?)", [id, chipList[i].color, chipList[i].count, chipList[i].value]);
        }
        res.status(200).send('Card created successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    } finally {
        if (conn) conn.end();
    }
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