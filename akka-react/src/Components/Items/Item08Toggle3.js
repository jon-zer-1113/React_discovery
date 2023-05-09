// RENDU CONDITIONNEL 3

import { useState } from "react";

function Item08Toggle3 (){

    const [toggle3State, settoggle3State] = useState(false);
    const modifToggle = () => {
        settoggle3State(!toggle3State)
    }

    console.log("toggle 3 = " + toggle3State);

    return (
    <div>

        <p>Etat du toggle 3 (depuis Item08Toggle3.js) <br /> (Affichage seulement si TRUE avec le && et un seul choix) : <br /> {toggle3State && "TRUE"}</p>

        <button onClick={modifToggle}>Changer l'etat du toggle 3</button>

    </div>
    )
}

export default Item08Toggle3;

/*
- L'opérateur logique && en JavaScript renvoie soit la valeur de l'opérande de droite SI l'opérande de gauche est vrai, soit la valeur de l'opérande de gauche sinon.
- SI l'opérateur && renvoie la valeur de l'opérande de gauche, qui est false. Donc, rien ne sera affiché dans ce cas.
*/
