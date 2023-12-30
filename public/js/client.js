const socket = io();

socket.on('connect', () => {
    console.log('Connecté au serveur');
});

socket.on('updatePlayers', (data) => {
    // Mettez à jour l'état du jeu ici en fonction des données reçues
});

socket.on('userCount', (count) => {
    // Mettre à jour l'affichage du nombre de joueurs connectés
    document.getElementById('playerCount').innerText = count + ' joueurs connectés';
});




