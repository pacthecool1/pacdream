// Objet représentant le vaisseau spatial
var spaceship = {
    x: 50,
    y: 50,
    radius: 50,
    moveSpeed: 2,

    // Méthode pour mettre à jour la position du vaisseau
    updatePosition: function(canvas) {
        if (window.etatMouvement.haut) { this.y = Math.max(0, this.y - this.moveSpeed); }
        if (window.etatMouvement.bas) { this.y = Math.min(canvas.height - this.radius * 2, this.y + this.moveSpeed); }
        if (window.etatMouvement.gauche) { this.x = Math.max(0, this.x - this.moveSpeed); }
        if (window.etatMouvement.droite) { this.x = Math.min(canvas.width - this.radius * 2, this.x + this.moveSpeed); }
    },

    // Méthode pour dessiner le vaisseau
    draw: function(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Calculer les positions relatives
        var centerX = this.x + this.radius; // Ajusté pour que le cercle soit au centre
        var centerY = this.y + this.radius; // Ajusté pour que le cercle soit au centre
        var offset = Math.sqrt(this.radius * this.radius - (this.radius / 4) * (this.radius / 4));
        var startY = centerY - this.radius / 4;
        var oppositestartY = centerY + this.radius / 4;

        // Dessiner le cercle
        ctx.beginPath();
        ctx.arc(centerX, centerY, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'green';
        ctx.fill();

        // Dessiner les canons
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;

        // Canon milieu haut
        ctx.beginPath();
        ctx.moveTo(centerX + offset, startY);
        ctx.lineTo(centerX + offset + 35, startY);
        ctx.stroke();
        
        // Canon milieu bas
        ctx.beginPath();
        ctx.moveTo(centerX + offset, oppositestartY);
        ctx.lineTo(centerX + offset + 35, oppositestartY);
        ctx.stroke();

        // Canon haut premier trait
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - this.radius);
        ctx.lineTo(centerX, centerY - this.radius - 20);
        ctx.stroke();

        // Canon bas premier trait
        ctx.beginPath();
        ctx.moveTo(centerX, centerY + this.radius);
        ctx.lineTo(centerX, centerY + this.radius + 20);
        ctx.stroke();

        // Canon haut second trait
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - this.radius - 20);
        ctx.lineTo(centerX + 45, centerY - this.radius - 20);
        ctx.stroke();

        // Canon bas second trait
        ctx.beginPath();
        ctx.moveTo(centerX, centerY + this.radius + 20);
        ctx.lineTo(centerX + 45, centerY + this.radius + 20);
        ctx.stroke();
    }
};

// Fonction d'animation
function animate(ctx) {
    spaceship.updatePosition(ctx.canvas); // Mettre à jour la position
    spaceship.draw(ctx); // Dessiner le vaisseau
    requestAnimationFrame(function() { animate(ctx); }); // Continuer l'animation
}

// Initialisation de l'animation
var canvas = document.getElementById('monCanvas');
var ctx = canvas.getContext('2d');
animate(ctx);



