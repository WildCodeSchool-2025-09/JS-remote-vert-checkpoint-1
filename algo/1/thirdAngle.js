/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80

let c = 180 - (a + b);
return c 

*/

function thirdAngle(a, b) {
  if (a <= 0 || b <= 0 || a + b >= 180){
    throw new Error("les angles donnés ne forment pas un triangle");
  }
 let c = 180 - ( a + b );
 return c
}

module.exports = thirdAngle;
