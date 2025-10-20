/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*//*je doit determiner une valeur a c = 180 
additioner a + b et la soustraire a c 
cree une var total avec le resultat */

function thirdAngle(a, b) {
  const c = 180;
  const total = c - (a + b);
  return total


}

module.exports = thirdAngle;
