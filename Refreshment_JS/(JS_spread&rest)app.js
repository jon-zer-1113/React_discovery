// Spread (OPERATOR)


const arr = [1,2,3];
console.log(...arr);
/* Ici, la méthode console.log() affichera 1 2 3 dans la console, 
car les éléments du tableau arr ont été étendus en tant qu'arguments distincts pour la méthode console.log(). 
C'est équivalent à appeler console.log(1, 2, 3). */

const arr = [1,2,3];
const arr2 = [arr, 4];
console.log(arr2);
/* ici j'utilise un deuxieme tableau dans lequel je mets le premier... SAUF QUE ça m'affiche [Array(3), 4] ...
ET JUSTEMENT c'est là que le Spread va entrer en jeu : car il va faire appelle à TOUS les elements du 1er tableau*/

const arr = [1,2,3];
const arr2 = [...arr, 4];
console.log(arr2);
// Du coup là j'ai enfin tous les elements des 2 tableaux, dans ma console: [1, 2, 3, 4]

const myObj = {
    a: 1,
    b: 2,
    c: 3
}
const myObj2 = {
    ...myObj,
    d: 3
}
console.log(myObj2);
// Ici la même chose avec un OBJET, on voit que Spread est très utile...


//////////////////////////////////////////////////////////////////////////////////////////////////////////


// Rest (OPERATOR)

function add (...args){
    console.log(args);
}
console.log(add('a',2));
/* Ici, on ne définit pas de paramètres en avance (nombre, type, etc...) MAIS juste args.
Cela va nous permettre de "choisir" nos paramètres LORSQUE l'on appelle la fonction justement... */

function add (a, b, ...args){
    console.log(args);
}
console.log(add(1,2,5,6,7));
// Ici on définit des paramètres MAIS on utilise seulement le reste des paramètres que l'on a défini avec "rest"(...args), donc ça affichera [5, 6, 7]
