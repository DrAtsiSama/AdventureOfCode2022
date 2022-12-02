// Document : https://adventofcode.com/2022/day/2/input
// Importation de FS - Gestionnaire de fichiers
const fs = require('fs');
// Récupération du contenu
const texte = fs.readFileSync('./Day2/input2.txt', 'utf-8').trimEnd();
// SCORE
const score = {
    A: { X:3, Y:6, Z:0},
    B: { X:0, Y:3, Z:6},
    C: { X:6, Y:0, Z:3},
};
// Ordre de valeurs
const refScore = {
    X : 1,
    Y : 2,
    Z : 3
};
// Choix possibles
const choixPossible = {
    A:{X:'Z', Y:'X',Z:'Y'},
    B:{X:'X', Y:'Y',Z:'Z'},
    C:{X:"Y", Y:'Z',Z:'X'}
};
// Calcul des points possibles
function resolve(texte, exerice ){
    // Initialisation des points
    let points = 0;
    // Boucle sur chaque lignes
    for (const ligne of texte.split('\n')) {
        // Séparation du joueur de son mouvement (Pierre, Papier, Ciseaux )
        let [joueur,mouvement] = ligne.split(' ');
        // Si 2 ème partie de ce Jour 2 
        if(exerice === 2)
            // Le mouvement prendra la valeur du mouvement choisi de ce joueur
            mouvement = choixPossible[joueur][mouvement];
        // ajout des points points = score joueur + reference des mouvements
        points += score[joueur][mouvement] + refScore[mouvement];
    };
    // Total
    console.log(points);
}
// PART 1
resolve(texte,1);
// PART 2
resolve(texte,2);