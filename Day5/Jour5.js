// Document : https://adventofcode.com/2022/day/5/input
// Importation de FS - Gestionnaire de fichiers
const fs = require('fs');
// Récupération du contenu
const texte = fs.readFileSync('./Day5/input5.txt', 'utf8').trimEnd();
// Réarrangement des caisses
function resolve(texte, exercice) {
  // Définition Caisses et déplacement
  const [diagram, moves] = texte.split('\n\n');
  // Création d'une pile
  const pile = [];
  // Boucle sur les Caisses pour les différents niveaux
  for (const ligne of diagram.split('\n').slice(0, -1)) {
    // Boucle sur les niveaux
    for (let i = 0; i < ligne.length; i += 4) {
      // Si la ligne suivant n'est pas vide
      if (ligne[i + 1] !== ' ') {
        // Opérateur de coalescence des nuls (opérateur renvoyant la partie de droite si la partie de gauche est null ou undefined. Renvoi la partie de gauche sinon)
        // la pile prend le contenu de sa caisse si elle existe sinon prend un espace vide
        pile[i / 4] = pile[i / 4] ?? [];
        // ajoute les éléments de la ligne suivante à la pile
        pile[i / 4].unshift(ligne[i + 1]);
      };
    };
  };
  // Boucle sur les déplacements à réaliser
  for (const deplacement of moves.split('\n')) {
    // Récupération de l'itération, point de départ, destination - match : permet d'avoir un tableau de correspondance
    // /\d+/g | \d compare un digit [0-9] | + jeton précédent testé autant fois que possible | global ne s'arrête pas au premier cas
    // move 1 from 3 to 5 -> 1 3 5
    const [iteration, inital, destination] = deplacement.match(/\d+/g).map(Number);
    // pile de caisses 
    const caisses = pile[inital - 1].slice(-iteration);
    // ajout des caisses au sommet dans le sens actuel ou inversé
    pile[destination - 1].push(...(exercice === 2 ? caisses : caisses.reverse()));
    // Redéfinition de la taille de la pile
    pile[inital - 1].length -= iteration;
  }
  // Affiche la caisse au sommet de chaques piles
  console.log(pile.map((pile) => pile[pile.length - 1]).join(''));
}
// PART 1
resolve(texte, 1);
// PART 2
resolve(texte, 2);