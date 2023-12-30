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

let connectedUsers = 0;

io.on('connection', (socket) => {
    connectedUsers++;
    console.log('Un joueur est connecté');
    io.emit('userCount', connectedUsers); // Envoyer le nombre de joueurs connectés à tous les clients

    
    socket.on('disconnect', () => {
        connectedUsers--;
        console.log('Un joueur est déconnecté');
        io.emit('userCount', connectedUsers); // Mettre à jour le compteur pour tous les clients
    });
});

server.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});



