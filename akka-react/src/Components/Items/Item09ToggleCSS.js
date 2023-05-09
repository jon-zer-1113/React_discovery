// RENDU CONDITIONNEL 4

import './Item09ToggleCSS.css';
import { useState } from "react";

function Item09ToggleCSS (){

    const [toggleCSS, setToggleCSS] = useState(false);
    const modifToggleCSS = () => {
        setToggleCSS(!toggleCSS)
    }

    console.log("toggle 4 = " + toggleCSS);

    return (
    <div>

        <p>Manipulation du CSS avec un toggle (4) (depuis Item09ToggleCSS.js)</p> <br />

        <span className={toggleCSS ? "spanBox" : "animatedBox"}></span> <br /><br />

        <button onClick={modifToggleCSS}>Changer l'etat du toggle 4</button>

    </div>
    )
}

export default Item09ToggleCSS;

/*
- L'opérateur ternaire (en className) applique une classe CSS à l'état du toggle. {toggleCSS ? "spanBox" : "animatedBox"}
- Voir le CSS si besoin c'est cool :)
*/
