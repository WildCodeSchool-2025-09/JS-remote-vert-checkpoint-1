/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80

  b*b = a*a + c*c - 2*a*c*cos(angleB)
b*b - a*a - c*c = - 2*a*c*cos(angleB)
2*a*c*cos(angleB) = a*a + c*c - b*b
cos(angleB) = (a*a + c*c - b*b) / (2*a*c)
angleB = acos((a*a + c*c - b*b) / (2*a*c))


si a = 90 b = 30 alors c = 60 
comment trouver c 
180 - 90 - 30 = 60 

*/

function thirdAngle(a, b) {
      return 180 - a -b;   
}

module.exports = thirdAngle;
