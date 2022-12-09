// Document : https://adventofcode.com/2022/day/4/input
// Importation de FS - Gestionnaire de fichiers
const fs = require('fs');
// Récupération du contenu
const texte = fs.readFileSync('./Day6/input6.txt', 'utf8').trimEnd();
// Calcul du nombre de marqueurs
function resolve(texte, exercice) {
  // 
  const n = exercice === 2 ? 14 : 4;
  // Boucle sur la taille du texte
  for (let i = 0; i < texte.length; i++) {
    // Test si égal au débur de paquet (4) ou au marqueur de début (14)
    if (new Set(texte.substring(i, i + n)).size === n) {
      // Total
      console.log(i + n);
      // FIN
      break;
    }
  }
}
// PART 1
resolve(texte, 1);
// PART 2 
resolve(texte, 2);