import { useState } from "react";

function Item03 (props){

    const [item03State, setItem03State] = useState('Item03 state !')

    return (
        <div>
            <h3>{props.number}</h3>
            <button onClick={() => props.func03(item03State)}
            >Change state</button>
        </div>
    )

}

export default Item03;

/* 
Lorsqu'on clique sur le bouton "Change state" dans Item03, 
la fonction "props.func03" est appelée, et "item03State" (qui vaut initialement "Item03 state !") est passé en argument à cette fonction. 
Dans App, la fonction "modifState03" est appelée avec cet argument "data", qui devient la nouvelle valeur de l'état "State03" dans App.
*/