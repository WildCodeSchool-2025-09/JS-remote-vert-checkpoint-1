/*
Écris une fonction qui peut déterminer si une année est une année bissextile. Elle doit renvoyer `true` si c'est le cas, et `false` sinon.
Rappel : Une année bissextile vérifie **une** de ces règles :
- Elle est divisible par 4, sans être divisible par 100
- Elle est divisible par 400
Ex : 2004, 2016 et 2020 sont des années bissextiles
Rappel : Pour vérifier si un nombre est divisible par un autre, tu peux utiliser l'opérateur "modulo" (%)
*/

// Je dois crée une fonction isLeapYear pour determiner si oui ou non cette année est un multiple de 4
// Je dois placer des conditions, une vrai si le modulo est a 0 et une fausse pour le reste

function isLeapYear(year) {
 return (year % 4 === 0 && year % 100 !==0) || 

module.exports = isLeapYear;
