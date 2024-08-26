const { exec } = require('child_process');
const express = require('express');
const app = express();

app.get('/server-status', (req, res) => {
    exec('screen -list | grep minecraft-server', (error) => {
        if (error) {
            res.json({ running: false });
        } else {
            res.json({ running: true });
        }
    });
});

app.listen(3000, () => {
    console.log('Serveur backend en écoute sur le port 3000');
});
