// RENDU CONDITIONNEL 1

import { useState } from "react";

function Item06Toggle (){

    const [toggleState, settoggleState] = useState(true);
    const modifToggle = () => {
        settoggleState(!toggleState)
    }

    console.log("toggle 1 = " + toggleState);

    return (
    <div>

        <p>Voici mon state du "toogle" num. 1 en temps réel (depuis Item06ToggleONOFF.js) : {toggleState ? "ON" : "OFF"}</p>

        <button onClick={modifToggle}>
            Changer l'etat du toggle 1
        </button>

    </div>
    )
}

export default Item06Toggle;

/*
- On a utilisé une condition ternaire pour afficher ON / OFF !!! c'est cool ^^ : {toggleState ? "ON" : "OFF"}
- Le bouton a un evenement "onClick" qui lui même utilise la methode "modifToggle" : button onClick={modifToggle}
- à chaque fois que l'on clique on modifie l'état (via le parametre) de la methode modifToggle : (!toggleState)
- au départ on définit l'état initial à "true" le mettant en parametre de useState...
*/
