// Destructuring (avec Objets et Tableaux)

// POUR LES OBJETS:

const pays = {
    nom: "Italie",
    popu: 60
}
// // Ici, un objet simple "pays" avec 2 propriétés et leurs valeurs.

const nom = pays.nom;
console.log(nom);
// // Pour créer facilement une variable avec comme valeur : une des propriétés de l'objet en question.

const {nom, popu} = pays;
console.log(nom, popu);
/* Ici, on crée deux variables nom et popu et les assigne aux propriétés correspondantes de l'objet pays. 
Ainsi, nom est assigné à la valeur de pays.nom et popu est assigné à la valeur de pays.popu. */


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /* En utilisant la décomposition (DESTRUCTURING) d'objet, le code est plus concis et peut être plus facile à lire. 
// De plus, cela peut être plus rapide que d'accéder aux propriétés de l'objet à chaque fois en utilisant la notation point (.), 
// surtout si on a plusieurs propriétés à extraire. */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const pays = {
        nom: "Italie",
        popu: 60
    }

const data = ({nom}) => nom;

console.log(data(pays));

/* La fonction data est définie avec un objet en tant que paramètre entre accolades ({nom}). 
Cela signifie que la fonction attend un objet en entrée, qui doit contenir une propriété nom. 

Ici, l'objet pays a une propriété nom, donc la fonction data peut être appelée avec pays comme argument (Donc là, via console.log)

Ensuite, la fonction data renvoie simplement la propriété nom de l'objet qui a été passé en paramètre. 
Dans mon cas, cela revient à renvoyer la valeur de pays.nom. */


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// POUR LES TABLEAUX:

const arr = [1,2,3];
const [a,b,c] = arr;
console.log(a,b,c);
/* Ici, on crée un tableau arr contenant les valeurs [1, 2, 3].
Ensuite, on déstructure le tableau arr en récupérant ses valeurs respectives dans les variables a, b et c.
Enfin, on affiche les valeurs des variables a, b et c dans la console à l'aide de console.log(a, b, c), ce qui devrait afficher 1 2 3. */
