const socket = io();

socket.on('connect', () => {
    console.log('Connecté au serveur');
});

socket.on('updatePlayers', (data) => {
    // Mettez à jour l'état du jeu ici en fonction des données reçues
});

// Vous pouvez également envoyer des informations au serveur
function sendPlayerMovement(movement) {
    socket.emit('playerMovement', movement);
}

