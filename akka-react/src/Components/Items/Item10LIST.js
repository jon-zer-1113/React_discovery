// LES LISTS

import { useState } from "react";

function Item10LIST (){
    const [dataArr, setdataArr] = useState([{nom: "Jon"}, {nom: "Jean"}, {nom: "Julie"}]);

    return (
    <div>
        {
        dataArr.map((elem, index) => {
            console.log("Liste 1 (index) = " + index);
            return <p key={index}>Nom : {elem.nom}</p>;
            }
        )
        }
    </div>
    )
}

export default Item10LIST;

/*
- On utilise la méthode "map()" qui permet d'itérer sur chaque élément du tableau "dataArr". 
La méthode "map()" va prendre chaque élément (un objet ici) et RETOURNER UN ELEMENT React pour chaque élément du tableau.

- La fonction fléchée passée en paramètre de "map()" permet de retourner un élément "p" avec la propriété "nom" de chaque objet.

- On utilise une clé "key" pour chaque élément du tableau. 
La clé est nécessaire pour que React puisse identifier chaque élément de manière unique et les mettre à jour correctement si jamais l'état change. 
Dans ce cas précis, la clé est simplement l'index de l'élément dans le tableau.
*/
