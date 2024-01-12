window.etatMouvement = { haut: false, bas: false, gauche: false, droite: false };

// Ajoutez la fonction sendMovementUpdate
function sendMovementUpdate() {
   if (window.etatMouvement.haut) { this.y = Math.max(0, this.y - this.moveSpeed); }
   if (window.etatMouvement.bas) { this.y = Math.min(canvas.height - this.radius * 2, this.y + this.moveSpeed); }
   if (window.etatMouvement.gauche) { this.x = Math.max(0, this.x - this.moveSpeed); }
   if (window.etatMouvement.droite) { this.x = Math.min(canvas.width - this.radius * 2, this.x + this.moveSpeed); }
    socket.emit('playerAction', { type: 'move', etatMouvement: window.etatMouvement });
}

var sequenceTouches = '';
var combinaisons = {
    'z': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    's': () => { window.etatMouvement.haut = false; window.etatMouvement.bas = true;  window.etatMouvement.gauche = false; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'q': () => { window.etatMouvement.haut = false; window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'd': () => { window.etatMouvement.haut = false; window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'zd': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'dz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'qz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'zq': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'ds': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'sd': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },             
    'sq': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'qs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'qds': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'qsd': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'sqd': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'zds': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'dzs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'zsd': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'dqs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'sdq': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'dsq': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'zqs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'qzs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'zsq': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'szq': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'sqz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'qsz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'zdq': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'dzq': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'dqz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'zqd': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'qzd': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'qdz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'szd': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'sdz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'dsz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'zdsq': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'zdqs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'zsdq': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'dzsq': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'dzqs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'dqzs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'zsqd': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'zqds': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'qzds': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'zqsd': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'qdzs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'qzsd': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'dsqz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'dszq': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'dqsz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'szdq': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'sdzq': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'sdqz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false;
    sendMovementUpdate()
 },
    'szqd': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'sqzd': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'sqdz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'qdsz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'qszd': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    'qsdz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true;
    sendMovementUpdate()
 },
    
    

                
};

document.addEventListener('keydown', function(e) {
    if (!sequenceTouches.includes(e.key)) {
        sequenceTouches += e.key;
        if (combinaisons[sequenceTouches]) {
            combinaisons[sequenceTouches]();
        } else if (combinaisons[e.key]) {
            combinaisons[e.key]();
        }
    }
});

document.addEventListener('keyup', function(e) {
    sequenceTouches = sequenceTouches.replace(e.key, '');
    if (sequenceTouches) {
        if (combinaisons[sequenceTouches]) {
            combinaisons[sequenceTouches]();
        } else {
            window.etatMouvement.haut = false; window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = false;
            sendMovementUpdate();
            if (combinaisons[sequenceTouches[sequenceTouches.length - 1]]) {
                combinaisons[sequenceTouches[sequenceTouches.length - 1]]();
            }
        }
    } else {
        window.etatMouvement.haut = false; window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = false;
        sendMovementUpdate();
    }
});
