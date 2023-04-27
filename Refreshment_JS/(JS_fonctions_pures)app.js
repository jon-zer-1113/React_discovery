// Fonction pure

let x = 2;
const add1 = y => x += y;
const add2 = (a,b) => a + b;
console.log(add1(3));
console.log(add2(4,5));
// Ici, 2 fonctions simples, voir console... PS: le += veut dire: x = x + y
/* QUELLE EST LA FONCTION PURE du coup ? : c'est la deuxième (add2) 
CAR elle n'utilise pas et n'influe pas sur des éléments exterieurs (tel que la var x)
TANDIS que la première influe sur un élément exterieur: la var x */

// EXEMPLES:

let x = 2;
const add1 = y => x += y;
const add2 = (a,b) => a + b;
console.log(add1(3));
console.log(add1(3));
console.log(add1(3));
console.log(add2(4,5));
console.log(add2(4,5));
console.log(add2(4,5));
// VOIR CONSOLE. On voit que la 1er fonction retourne une valeur différente à chaque fois CAR elle modifie progressivement un élément extérieur (la var x)
// ALORS QUE, la 2eme fonction retourne toujours les memes valeurs car elle ne modifie pas d'éléments exterieurs mais seulement ce qu'on lui donne en parametres...
// ça evite d'entrer en conflits avec d'autres fonctions, ça réduit le nombre de bug, on sait ce que ça va retourner, etc, dans le code en soit... Fonctions pures = Nice ;-)
