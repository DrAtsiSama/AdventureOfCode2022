// Document : https://adventofcode.com/2022/day/3/input
// Importation de FS - Gestionnaire de fichiers
const fs = require('fs');
// Récupération du contenu
const texte = fs.readFileSync('./Day3/input3.txt', 'utf-8').trimEnd();
// Priorisation des objets (a (1) ou A (27))
function getItemPriority(caractere) {
    // Opération ternaire caractère === caractère minuscule -> 1 sinon -> 27 
    return caractere === caractere.toLowerCase() ? 
            // codePointAt() retourne un entier positif correspondant à l'Unicode (a = 97)
            caractere.codePointAt(0) - 'a'.codePointAt(0) + 1 :
            // codePointAt() retourne un entier positif correspondant à l'Unicode (A = 65)
            caractere.codePointAt(0) - 'A'.codePointAt(0) + 27;
};
// type d'objet qui va apparaitre dans chaque sac à dos  EXERCICE 1
function resolve(texte) {
    // Initialisation du total des priorités de l'objet
    let totalPriorite = 0;
    // boucle sur chaque sac a dos
    for (const sac of texte.split('\n')){
        // Séparation d'un sac à dos en deux 
        const [premiereMoitier,deuxiemeMoitier] = [
            // Récupération de la première partie du Sac à dos
            sac.slice(0, sac.length / 2),
            // Récupération de la seconde  partie du Sac à dos
            sac.slice(sac.length / 2 ),
        // Creation d'un tableau représentant le compartiment et ses objets
        ].map((compartiment) => [...compartiment]);
        // Récupération des objets communs entre 2 compartiments
        const objetCommun = premiereMoitier.filter((caractere) => deuxiemeMoitier.includes(caractere));
        // Total du type d'objet se trouvant dans chaque sac à dos 
        totalPriorite += getItemPriority(objetCommun[0]);
    };
    // Solution 1 : Le type d'objet apparaissant dans chaque compartiments de chaques sac à dos
    console.log("Total Exercice 1 : ", totalPriorite);
};
// Calcul des objets aux badges de trios d'elfes  EXERCICE 2
function resolve2(texte) {
    // Initialisation du total des priorités de l'objet
    let totalPriorite = 0;
    // Separation des sacs à dos
    const lignes = texte.split('\n');
    // boucle par trio d'elfes
    for( let iteration = 0 ; iteration < lignes.length; iteration += 3) {
        // Récupération des sacs du Trio d'elfes
        const sacs = lignes.slice(iteration, iteration + 3).map((ligne) => [...ligne]);
        // Récupérons du 1 er sac
        let contenuSac = sacs[0];
        // Pour chaque sac de l'emsemble des sacs (hormis le premier)
        for (const sac of sacs.slice(1)) {
            // Comparaison entre le 1 er sac et le suivant et récupération des objets communs
            contenuSac = contenuSac.filter((caractere) => sac.includes(caractere));
        };
        // Total du type d'objet se trouvant dans chaque sac à dos 
        totalPriorite += getItemPriority(contenuSac[0]);
    };
    // Solution 2 : Somme de la priorité des objets correspondant aux badges des trios d'elfes
    console.log("Priorité du type d'objet : ", totalPriorite);
};
// PART 1
resolve(texte);
// PART 2
resolve2(texte);