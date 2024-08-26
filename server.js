const express = require('express');
const path = require('path');
const statusRoutes = require('./routes/serverRoutes'); // Importer les routes
const app = express();

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Utiliser les routes
app.use('/', statusRoutes);

// Écouter sur le port 3000
app.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
});
