// Fonction d'ordre supérieur (qui prend une fonction en parametre OU qui en retourne une autre OU les 2 à la fois)


const rawArr = [5, 6, 5889, 52, 415, 120];

const newArr = [];

for(let i = 0; i < rawArr.length; i++){
    // instructions à exécuter à chaque itération
    if(rawArr[i] > 100){
        newArr.push(rawArr[i])
    }
}

console.log(newArr);
/* crée un nouveau tableau newArr contenant les éléments de rawArr qui sont supérieurs à 100. 
La boucle for parcourt chaque élément de rawArr et vérifie si sa valeur est supérieure à 100 à l'aide d'une condition if. 
Si la condition est vraie, l'élément est ajouté à newArr à l'aide de la méthode push(). Enfin, le tableau newArr est affiché à l'aide de console.log(). */


///////////////////////////////////////////////////////////////////////////////////////////////////


const rawArr = [5, 6, 5889, 52, 415, 120];

function supArr(arr, fn){

    const newArr = [];

    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
/* Cette fonction (D'ORDRE SUPERIEUR) supArr() prend deux arguments : un tableau arr et une fonction fn. 
Elle crée un nouveau tableau newArr vide, puis parcourt chaque élément de arr à l'aide d'une boucle for. 
Pour chaque élément, la fonction fn est appelée avec l'élément en argument. 
Si fn renvoie une valeur qui est évaluée à true dans une condition if, l'élément est ajouté à newArr à l'aide de la méthode push(). 
Enfin, la fonction retourne newArr. */


const arrSup100 = supArr(rawArr, (item) => {
    if(item > 100){
        return item;
    }
})

const arrSup10 = supArr(rawArr, (item) => {
    if(item > 10){
        return item;
    }
})

console.log(arrSup100);
console.log(arrSup10);
/* 2 tableaux sont créés en appelant la fonction supArr avec le tableau rawArr et deux fonctions de rappel différentes : 
une pour filtrer les éléments supérieurs à 100 
et une autre pour filtrer les éléments supérieurs à 10.
Finalement, les deux tableaux filtrés sont imprimés dans la console avec console.log. */
