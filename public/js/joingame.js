document.addEventListener('DOMContentLoaded', (event) => {
// Gestionnaire de clic pour le bouton "Rejoindre le Jeu"
document.getElementById("joinGame").addEventListener("click", function() {
    // Envoyer une demande pour rejoindre une session de jeu
    socket.emit('joinGame');

    // Cacher l'interface de connexion et afficher le canvas
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("connectScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";

    // Initialiser le jeu (canvas, écouteurs d'événements, etc.)
    initGame();
});

// Initialisation du jeu
function initGame() {
    var canvas = document.getElementById('monCanvas');
    var ctx = canvas.getContext('2d');

    // Ajuster la taille du canvas et autres initialisations
    ajusterTailleCanvas(canvas);

    // Démarrer la boucle d'animation ou toute autre logique de jeu
    animate(ctx);

    // Écouter les mises à jour du serveur (mouvements des autres joueurs, etc.)
    socket.on('updatePlayers', (data) => {
        // Mettre à jour l'état du jeu avec les données des autres joueurs
    });
}

// Fonction pour ajuster la taille du canvas (définie dans canvasSetup.js)
function ajusterTailleCanvas(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

});