/*
Écris une fonction qui peut déterminer si une année est une année bissextile. Elle doit renvoyer `true` si c'est le cas, 
et `false` sinon.
Rappel : Une année bissextile vérifie **une** de ces règles :
- Elle est divisible par 4, sans être divisible par 100
- Elle est divisible par 400
Ex : 2004, 2016 et 2020 sont des années bissextiles
Rappel : Pour vérifier si un nombre est divisible par un autre, tu peux utiliser l'opérateur "modulo" (%)

 SI l'année % 4 === 0
    est ce quelle es mutliple de 100 
        SI OUI FALSE
        SI NON est ce qu'elle est multiple de 400 si oui TRUE SINON

*/

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
    return true
  }
  return false
}

module.exports = isLeapYear;
