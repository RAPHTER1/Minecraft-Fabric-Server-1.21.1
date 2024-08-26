// Vérifie le statut du serveur
fetch('/server-status')
    .then(response => response.json())
    .then(data => {
        const startBtn = document.getElementById('start-btn');
        const statusText = document.getElementById('status');
        const serverStatus = document.getElementById('server-status');

        if (data.running) {
            startBtn.disabled = true;
            statusText.textContent = 'Le serveur est déjà en cours d\'exécution.';
            serverStatus.textContent = 'SERVER STATUS: ONLINE';
            serverStatus.style.color = 'green';
        } else {
            startBtn.disabled = false;
            statusText.textContent = 'Le serveur est arrêté.';
            serverStatus.textContent = 'SERVER STATUS: OFFLINE';
            serverStatus.style.color = 'red';
        }
    })
    .catch(err => {
        console.error('Erreur lors de la vérification du statut du serveur :', err);
    });
