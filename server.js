const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
app.use(express.static('public'));

const server = http.createServer(app);
const io = socketIo(server);

let gameStates = {}
let connectedUsers = 0;
let gameSessions = {};
let sessionCount = 0;
let playerSessions = {};

function createNewSession(playerId) {
    sessionCount++;
    const sessionId = `server${sessionCount}`;
    gameSessions[sessionId] = { players: [playerId] };
    return sessionId;
}

function findAvailableSession() {
    for (let sessionId in gameSessions) {
        console.log(gameSessions[sessionId],gameStates)
        if (gameSessions[sessionId].players.length < 4) {
            return sessionId;
        }
    }
    return null;
}

function addPlayerToSession(playerId) {
    if (playerSessions[playerId]) {
        console.log(`Joueur ${playerId} est déjà dans une session`);
        return playerSessions[playerId];
    }
    let sessionId = findAvailableSession();
    if (!sessionId) {
        sessionId = createNewSession(playerId);
    } else {
        gameSessions[sessionId].players.push(playerId);
    }
    playerSessions[playerId] = sessionId;
    return sessionId;
}

io.on('connection', (socket) => {
    connectedUsers++;
    console.log('Un joueur est connecté');
    io.emit('userCount', connectedUsers);

    socket.on('requestJoinGame', () => {
        const sessionId = addPlayerToSession(socket.id);
        console.log(`Joueur ${socket.id} a rejoint la session ${sessionId}`);
        socket.join(sessionId); // Ajoute le joueur à la room de la session
        // Initialiser l'état du joueur
        if (!gameStates[sessionId]) {
            gameStates[sessionId] = {};
        }
        gameStates[sessionId][socket.id] = {
            x: 0, // Position initiale x
            y: 0, // Position initiale y
            // Autres états du joueur
        };

        const currentPlayers = [];
        for (const playerId in playerSessions) {
            console.log(playerId)
            if (playerSessions[playerId] === sessionId) {
                currentPlayers.push(playerId)
            }
        }

        socket.emit('joinedSession', { sessionId: sessionId, currentPlayers: currentPlayers });
        io.to(sessionId).emit('playerJoin', socket.id);
    });

    socket.on('playerAction', (action) => {
        console.log(action)
        const sessionId = playerSessions[socket.id];
        if (sessionId && gameStates[sessionId] && gameStates[sessionId][socket.id]) {
            // Mettre à jour l'état du joueur en fonction de l'action
            if (action.type === 'move') {
                gameStates[sessionId][socket.id].x = action.x;
                gameStates[sessionId][socket.id].y = action.y;
                 // Autres mises à jour selon l'action
            }
            io.to(sessionId).emit('updateGameState', gameStates[sessionId]);
        }
    });

    socket.on('disconnect', () => {
        connectedUsers--;
        if (playerSessions[socket.id]) {
            const sessionId = playerSessions[socket.id];
            const playerIndex = gameSessions[sessionId].players.indexOf(socket.id);
            if (playerIndex > -1) {
                gameSessions[sessionId].players.splice(playerIndex, 1);
                delete gameStates[sessionId][socket.id];
            }
            delete playerSessions[socket.id];
            io.to(sessionId).emit('playerLeft', socket.id); 
        }
        console.log(`Joueur ${socket.id} déconnecté et retiré de la session`);
        io.emit('userCount', connectedUsers);
    });
});

server.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});










