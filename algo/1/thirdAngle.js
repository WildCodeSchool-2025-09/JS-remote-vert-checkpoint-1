/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

// Je dois faire une fonction thirdAngle avec les valeurs A et B qui determineront C 
// C est déterminer par la valeur de  180 - (A + B) = C.

function thirdAngle(a, b) {
  return 180 - (a + b); 
}

console.log(thirdAngle(a, b));

module.exports = thirdAngle;
