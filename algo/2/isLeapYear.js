/*
Écris une fonction qui peut déterminer si une année est une année bissextile. Elle doit renvoyer `true` si c'est le cas, et `false` sinon.
Rappel : Une année bissextile vérifie **une** de ces règles :
- Elle est divisible par 4, sans être divisible par 100
- Elle est divisible par 400
Ex : 2004, 2016 et 2020 sont des années bissextiles
Rappel : Pour vérifier si un nombre est divisible par un autre, tu peux utiliser l'opérateur "modulo" (%)


si 1 année bisextile si oui true si non false 
divisible par 4 true et non divisible par 100 false 
 2004 / 4 = 501 4* 501 = 2004 donc modulo  0  || 2005/4 = 501.25 nombre pas entier donc faux 
 2004 / 100 = 20.04 nombre non entier donc faux || 2005/100 = 20.05 nombre non entier donc faux 
divisible par 400 true


test sur 2004 / 2016 / 2020 utilisier modulo 7%3 = 1 4%2=0

 }else{}
           console.log (false);
            if (year % 100 != 0){
            console.log(true);
           }

*/
function isLeapYear(year) {
         if (year % 4 === 0 && year % 100 != 0){
          return(true);
         }
         else if ( year % 400 === 0){
         return (true);
         }else{
          return (false);
         }
}
     
module.exports = isLeapYear;
