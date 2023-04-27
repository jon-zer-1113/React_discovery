// Scope:

function foo(){
    if(true){
        var x = 5;
    }
    console.log(x);
}
foo();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Redeclaration:

var x = 5;
x = 10;
console.log(x);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Hoisting: (Le "hissage", on peut utiliser une fonction avant même de la déclarer (JS fait le lien et la détécte quand même...))

foo();
function foo(){
    console.log("Hello");
}

// Hoisting des variables: (Avec les var cela ne fonctionne pas pour la valeur) 
// PAR CONTRE: avec let et const cela ne fonctionne pas du tout

console.log(x);
var x = 10;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Global: (une var est stocké dans "window"... TANDIS que let et const : NON, cela évite les conflits)

var maVarX = 10;
console.log(maVarX);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Différence basique:

var x = 10;
x = "abc";
console.log(x);
// Ici la valeur de la variable est carrément changer en string

const x = 10;
x = "abc";
console.log(x);
// Ici, ça affiche une erreur car une constante est inchangeable... du moins...

const x = {a: 5};
x = {b: 5};
console.log(x);
// La même chose, une erreur en voulant changeant l'objet (déclaré entre {})

const x = {a: 5};
x.a = 10;
console.log(x);
// LOL, ici, par contre on peut changer l'intérieur de l'obje (car cela change JUSTE la valeur et non la variable stockée en mémoire)...
