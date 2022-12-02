// Document : https://adventofcode.com/2022/day/1/input
// Importation de FS - Gestionnaire de fichiers
const fs = require('fs');
// Récupération du contenu
const texte = fs.readFileSync('./Day1/input.txt', 'utf-8').trimEnd();
// Séparation et Calcul des consommations
function resolve(texte) {
    // Conteneur
    const elfes = texte
                    // Séparation du contenu séparé par retour à la ligne
                    .split('\n\n')
                    // Création d'un tableau pour chaque elfe
                    .map((elfe) =>
                        // Un Elfe
                        elfe
                            // Séparation de chaque valeur
                            .split('\n')
                            // Tableau de nombres
                            .map(Number)
                            // Accumulateur des différentes valeurs
                            .reduce((totalcalorie, foodcalorie) => totalcalorie + foodcalorie))
                    // Tri afin de définir la valeur la plus importante (Valeur 1 comparé à la Valeur 2)
                    .sort((a,b) => b - a);
    // Solution 1 : Elf ayant consommé le plus de calories
    console.log(elfes[0]);
    // Solution 2 : Calories consommées par le top 3 des elfes 
    console.log(elfes.slice(0, 3).reduce((totalcalorie,foodcalorie) => totalcalorie + foodcalorie));
}
// Lancement de la résolution
resolve(texte);