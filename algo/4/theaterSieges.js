/*
Un employé de théâtre souhaite obtenir la liste de tous les sièges de sa salle principale.
Dans la salle les places sont réparties comme suit :
   - Il y a 26 colonnes de sièges, numérotées de "1" » à "26".
   - Chaque colonne contient 100 sièges, numérotés de "1" à "100".

Complète la fonction theaterSieges pour qu'elle renvoie un tableau
où chaque sous-tableau répertorie les positions des sièges dans une rangée.

exemple du résultat final :

[
  ["1-1", "1-2", "1-3", ..., "1-100"],
  ["2-1", "2-2", "2-3", ..., "2-100"],
  ...
  ["26-1", "26-2", "26-3", ..., "26-100"]
]

je veux que un tableau de 26 tableaux de 100 strings
*/

function theaterSieges() {
  let theaterSiege = [];

  for(i = 0; i < 26; i++) {
    theaterSiege[i] = [];

    for(j = 1; j < 101; j++) {
      theaterSiege[i].push(`${i+1}-${j}`);
    }
  }

  return theaterSiege;
}

module.exports = theaterSieges;
