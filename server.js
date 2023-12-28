const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
// Créer une application Express
const app = express();
// Servir les fichiers statiques du dossier spécifié
app.use(express.static('public')); 
// Créer un serveur HTTP à partir de l'application Express
const server = http.createServer(app);
// Attacher Socket.IO au serveur
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('Un joueur sest connecté');

    socket.on('playerMovement', (data) => {
        // Envoyer les données de mouvement à tous les clients sauf à celui qui les a envoyées
        socket.broadcast.emit('updatePlayers', data);
    });

    socket.on('disconnect', () => {
        console.log('Un joueur sest déconnecté');
    });
});

server.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});


