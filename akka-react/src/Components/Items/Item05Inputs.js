import { useState } from "react";

function Item05Inputs (){

    const [InputData, setInputData] = useState();
    const modifInput = (e) => {
        setInputData(e)
    }

    console.log(InputData);

    return (
    <div>

        <p>Voici mon state du input en temps réel (depuis Item05Inputs.js) : {InputData}</p>

        <input 
        type="text"
        onInput={e => modifInput(e.target.value)}
        />

    </div>
    )
}

export default Item05Inputs;

/*
"onInput" est un événement qui se produit lorsque l'utilisateur saisit quelque chose dans l'input.
La fonction fléchée (entre les accolades) est appelée à chaque fois que l'événement "onInput" se produit.

La variable "e" représente l'objet de l'événement (dans ce cas, l'événement "onInput"). 
"e.target" fait référence à l'élément qui a déclenché l'événement, donc ici, c'est l'input. "e.target.value" renvoie la valeur actuelle de l'input.

Ainsi, lorsqu'un utilisateur saisit quelque chose dans l'input, la fonction "modifInput" est appelée et la valeur de l'input est passée en tant qu'argument à la fonction. 

Ensuite, la fonction "modifInput" met à jour l'état "InputData" avec la nouvelle valeur de l'input, 
ce qui permet d'afficher la valeur dans la page en temps réel grâce au hook useState.

'e' est une variable. Elle représente l'événement déclenché lors de l'interaction avec l'élément <input>. 
L'objet qui contient les informations sur l'événement est passé en tant qu'argument de la fonction fléchée.
L'objet événement contient une propriété target qui est un objet représentant l'élément HTML qui a déclenché l'événement. 
La propriété value de cet objet est ensuite utilisée pour récupérer la valeur saisie dans l'élément <input>.
*/
