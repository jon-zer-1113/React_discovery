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
