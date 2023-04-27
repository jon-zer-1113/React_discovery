// Fonction d'ordre supérieur des tableaux

const arr = [1,2,3,4,5,6];
const mapedArr = arr.map(x => x + 10)
console.log(mapedArr);
/* La méthode map prend une fonction en argument qui sera appliquée à chaque élément du tableau, 
et renvoie un nouveau tableau contenant les valeurs résultantes de chaque appel de la fonction. 
Dans ce cas-ci, la fonction d'argument est une fonction fléchée qui prend un nombre x et renvoie x + 10. */
// MAP très très utilisé en REACT

const filteredArr = arr.filter(num => num > 2)
console.log(filteredArr);
/* Dans ce code, la méthode filter() est utilisée sur un tableau arr qui contient les nombres 1, 2, 3, 4, 5 et 6. 
La méthode filter() prend en argument une fonction qui va déterminer si un élément doit être conservé dans le nouveau tableau ou non. 
Dans ce cas, la fonction de filtrage est num => num > 2, ce qui signifie que si l'élément actuel est supérieur à 2, alors il sera conservé dans le nouveau tableau filtré. 
Ainsi, le nouveau tableau filteredArr contiendra les nombres 3, 4, 5 et 6. Ensuite, ce nouveau tableau est simplement affiché dans la console via console.log. */

arr.forEach(val => {
    console.log(val - 90);
})
/* Pour chaque (FOR EACH) élément du tableau arr, la fonction fléchée (val => {...}) est exécutée. 
Dans cet exemple, cette fonction soustrait 90 à chaque élément de l'array et affiche le résultat à la console à l'aide de console.log(). */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PS : une fonction CALL-BACK est une fonction qui se fait appeller par une autre fonction tout simplement.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
