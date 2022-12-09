// Document : https://adventofcode.com/2022/day/4/input
// Importation de FS - Gestionnaire de fichiers
const fs = require('fs');
// Récupération du contenu
const texte = fs.readFileSync('./Day4/input4.txt', 'utf-8').trimEnd();
// Calcul des intervales qui comptiennent entièrement le second intervale EXERCICE 1
function resolve(texte) {
    // Initialisation du compteurs de couples
    let compteur = 0;
    // Boucle sur chaque ligne
    for (const ligne of texte.split('\n')) {
        // Définition du premier et deuxieme couple de la ligne
        const [
            [a1,b1],
            [a2,b2]
        ] = ligne
            // Séparé par une virgule
            .split(',')
            // Séparé par un tiret
            .map((elfe) => elfe.split('-').map(Number));
        // Si (la valeur 1 est inférieur ou égale à la seconde et sa pair supérieur ou égale à la seconde pair) OU
        // Si (la valeur 1 est supérieur ou égale à la seconde et sa pair inférieur ou égale à la seconde pair)
        if((a1 <= a2 && b1 >= b2) || (a1 >= a2 && b1 <= b2)){
            // On incrémente le compteur
            compteur++;
        };
    };
    // Total
    console.log(compteur);
};
// Calcul des intervales qui se superpose EXERCICE 2
function resolve2(texte) {
    // Initialisation du compteurs de couples
    let compteur = 0;
    // Boucle sur chaque ligne
    for(const ligne of texte.split('\n')) {
        // Définition du premier et deuxieme couple de la ligne
        const [
            [a1,b1],
            [a2,b2]
        ] = ligne
            // séparé par une virgule
            .split(',')
            // séparé par un tiret 
            .map((elfe) => elfe.split('-').map(Number));
        // Si (la valeur 1 est supérieur ou égale à la valeur 2 et la valeur 1 inférieur ou égale à la seconde pair) OU
        // Si (la valeur 2 est supérieur ou égale à la valeur 1 et la valeur 2 inférieur ou égale à la seconde pair)
        if((a1 >= a2 && a1 <= b2) || (a2 >= a1 && a2 <= b1)){
            // On incrémente le compteur
            compteur++;
    };
};
    // Total
    console.log(compteur);
}

// PART 1
resolve(texte);
// PART 2
resolve2(texte);