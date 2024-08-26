// Vérifier le statut du serveur
fetch('/server/status')
    .then(response => response.json())
    .then(data => {
        const statusText = document.getElementById('server-status');
        if (data.running) {
            statusText.textContent = 'Statut du serveur : En ligne';
            statusText.style.color = 'green';
        } else {
            statusText.textContent = 'Statut du serveur : Hors ligne';
            statusText.style.color = 'red';
        }
    })
    .catch(err => {
        console.error('Erreur lors de la vérification du statut du serveur :', err);
    });
