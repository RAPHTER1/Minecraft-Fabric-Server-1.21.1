fetch('/server-status')
    .then(response => response.json())
    .then(data => {
        const startBtn = document.getElementById('start-btn');
        const statusText = document.getElementById('server-status');

        if (data.running) {
            // Le serveur est en ligne : désactiver et changer la couleur
            statusText.textContent = 'Statut du serveur : En ligne';
            statusText.style.color = 'green';
            startBtn.classList.remove('server-offline');
            startBtn.classList.add('server-online');
        } else {
            // Le serveur est hors ligne : activer et changer la couleur
            statusText.textContent = 'Statut du serveur : Hors ligne';
            statusText.style.color = 'red';
            startBtn.classList.remove('server-online');
            startBtn.classList.add('server-offline');
        }
    })
    .catch(err => {
        console.error('Erreur lors de la vérification du statut du serveur :', err);
    });
