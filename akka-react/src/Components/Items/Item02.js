import { useState } from "react";

function Item02 (){

    console.log("MAJ Item02");

    const [Item02State, setItem02State] = useState("Le item state");
    const modifState02 = () => {
        setItem02State("Mon nouveau state en cliquant ! ahah !")
    }

    return (
    <div>
        <p>Voici mon props (depuis Item02.js) : {Item02State}</p>
        <button onClick={modifState02}>Change state Item02</button>
    </div>
    )
}

export default Item02;


/*
Ici, en utilisant la décomposition de tableau (array destructuring), 
on peut extraire les deux éléments du tableau en deux variables distinctes :
- Item02State est la variable qui contient la valeur actuelle de l'état ("Le item state"), 
- setItem02State est la fonction qu'on utilise pour mettre à jour la valeur de l'état.

ET OUI, lorsque l'on déclare une variable avec useState, on crée un tableau avec deux éléments (etat + set). 
*/