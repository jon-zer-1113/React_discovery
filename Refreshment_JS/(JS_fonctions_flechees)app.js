// Fonction fléchée:

const add = (a,b) => {
    return a + b;
}
console.log(add(2,2));
// Ici on a une fonction quasi classique en utilisant la flèche

const add = (a,b) => a + b;
console.log(add(2,2));
// Ici voici l'avantage de la vraie fléchée: raccourci, simple (lorsqu'on a juste un return)

const add = a => a;
console.log(add(2));
// Ici on a juste 1 paramètre



// Le bazar des objets: ;-p

const myObj = {
    foo: function(){
        console.log('hello');
    }
}
myObj.foo();
// Ici, une fonction classique dans un objet... ET vu que c'est une fonction DANS un objet, on appele cela une METHODE tout simplement

const myObj = {
    foo(){
        console.log(this);
    }
}
myObj.foo();
// Ici, la fonction est raccourci, ET myObj APPELLE la méthode foo, DONC this fait référence à l'objet foo

const myObj = {
    a: "5",
    foo(){
        console.log(this.a);
    }
}
myObj.foo();
// Ici, on veut utiliser la valeur de la proriété "a" de l'objet DANS la fonction

/* L'utilisation de this est courante dans les objets en JavaScript pour faire référence à l'objet actuel dans lequel la méthode est appelée. 
En utilisant this, vous pouvez accéder aux propriétés et méthodes de l'objet courant, 
même si leur nom est défini dynamiquement ou s'ils sont définis en dehors de la méthode actuelle. */

const myObj = {
    a: "5",
    foo: () => {
        console.log(this);
    }
}
myObj.foo();
// Ici, this n'a pas accés à la propriété a, CAR this (avec un fonction fléchée) : ça fait appelle au contexte ENGLOBANT (window)...
// DONC : le contexte "APPELANT" c'est l'objet myObj qu'on a créé ... ET ... le contexte "ENGLOBANT" c'est le window global
