const { exec } = require('child_process');
const express = require('express');
const router = express.Router();

router.get('/server-status', (req, res) => {
    exec('screen -list | grep minecraft-server', (error) => {
        if (error) {
            res.json({ running: false });
        } else {
            res.json({ running: true });
        }
    });
});

module.exports = router;