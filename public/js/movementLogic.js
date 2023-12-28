window.etatMouvement = { haut: false, bas: false, gauche: false, droite: false };
var sequenceTouches = '';
var combinaisons = {
    'z': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = false; },
    's': () => { window.etatMouvement.haut = false; window.etatMouvement.bas = true;  window.etatMouvement.gauche = false; window.etatMouvement.droite = false; },
    'q': () => { window.etatMouvement.haut = false; window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'd': () => { window.etatMouvement.haut = false; window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'zd': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'dz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'qz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'zq': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'ds': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'sd': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },             
    'sq': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'qs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'qds': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'qsd': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'sqd': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'zds': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'dzs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'zsd': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'dqs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'sdq': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'dsq': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'zqs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'qzs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'zsq': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'szq': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'sqz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'qsz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'zdq': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'dzq': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'dqz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'zqd': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'qzd': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'qdz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'szd': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'sdz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'dsz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'zdsq': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'zdqs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'zsdq': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'dzsq': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'dzqs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'dqzs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'zsqd': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'zqds': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'qzds': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'zqsd': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'qdzs': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'qzsd': () => { window.etatMouvement.haut = false;  window.etatMouvement.bas = true; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'dsqz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'dszq': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'dqsz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'szdq': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'sdzq': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'sdqz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = true; window.etatMouvement.droite = false; },
    'szqd': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'sqzd': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'sqdz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'qdsz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'qszd': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    'qsdz': () => { window.etatMouvement.haut = true;  window.etatMouvement.bas = false; window.etatMouvement.gauche = false; window.etatMouvement.droite = true; },
    
    

                
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
            // Réinitialiser l'état de mouvement
            window.etatMouvement.haut = false;
            window.etatMouvement.bas = false;
            window.etatMouvement.gauche = false;
            window.etatMouvement.droite = false;
            if (combinaisons[sequenceTouches[sequenceTouches.length - 1]]) {
                combinaisons[sequenceTouches[sequenceTouches.length - 1]]();
            }
        }
    } else {
        window.etatMouvement.haut = false;
        window.etatMouvement.bas = false;
        window.etatMouvement.gauche = false;
        window.etatMouvement.droite = false;
    }
});
