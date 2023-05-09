// RENDU CONDITIONNEL 2

import { useState } from "react";

function Item07Toggle2 (){

    const [toggle2State, settoggle2State] = useState(true);
    const modifToggle2 = () => {
        settoggle2State(!toggle2State)
    }

    console.log("toggle 2 = " + toggle2State);

    if(toggle2State){
        return (
            <div>
        
                <p>Etat du toggle 2 (depuis Item07Toggle2.js): TRUE</p>
        
                <button onClick={modifToggle2}>
                    Changer l'etat du toggle 2
                </button>
        
            </div>
        );
    } else if(toggle2State === false){
        return (
            <div>
        
                <p>Etat du toggle 2 (depuis Item07Toggle2.js) : FALSE</p>
        
                <button onClick={modifToggle2}>
                    Changer l'etat du toggle 2
                </button>
        
            </div>
        );
        }
}

export default Item07Toggle2;

/*
- Ici une autre façon d'afficher l'état d'un toggle tout simplement (utile lorsqu'on a beaucoup d'éléments a switcher par exemple)
*/
