document.getElementById("gameStart").addEventListener("click", function() {
    document.getElementById("connectScreen").style.display = "none";
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";

    var canvas = document.getElementById('monCanvas');
    var ctx = canvas.getContext('2d');
    window.addEventListener('resize', function() {
        ajusterTailleCanvas(canvas);
    });

    
    ajusterTailleCanvas(canvas);
    animate(ctx); // Lancer la boucle d'animation
});
