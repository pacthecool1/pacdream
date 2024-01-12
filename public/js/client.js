const socket = io();

const players = {};

socket.on('connect', () => {
    console.log('Connecté au serveur');
});
socket.on('joinedSession', (data) => {
    data.currentPlayers.forEach((playerId) => {
        const spaceship = new Spaceship();
        spaceship.draw();
        players[playerId] = {
            spaceship: spaceship,
        };
    })  
})

socket.on('updatePlayers', (playersData) => {
    // Utiliser playersData pour mettre à jour les positions des autres joueurs sur le canvas
    updateOtherPlayers(playersData);
});

socket.on('userCount', (count) => {
    document.getElementById('playerCount').innerText = count + ' joueurs connectés';
});

socket.on('playerJoin', (playerId) => {
    const spaceship = new Spaceship();
    spaceship.draw();
    players[playerId] = {spaceship: spaceship};
    console.log(players)
})
socket.on('playerLeft', (playerId) => {
    delete players[playerId];
    console.log(players)
})

document.getElementById("joinGame").addEventListener("click", function() {
    socket.emit('requestJoinGame');
    document.getElementById('monCanvas').style.display = 'block';
});

function sendMovementUpdate() {
    socket.emit('playerAction', { type: 'move', etatMouvement: window.etatMouvement });
}
function addPlayer(player){
    
}

function updateOtherPlayers(playersData) {
    // Ici, mettez à jour le canvas avec les informations des autres joueurs
    // Par exemple, dessiner chaque joueur à sa position
}

socket.on('updateGameState', (action) => {
    if (action.type === 'move') {
        // Mettre à jour le canvas en fonction de l'action reçue
    }
});








