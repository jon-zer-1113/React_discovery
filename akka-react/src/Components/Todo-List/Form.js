// Ma Todo-list !
/*

REGLES !!! INFOS hooks et fonctions :

- Les hooks : doivent être toujours dans la RACINE d'une fonction ! (pas dans une imbrication, etc...) en gros : tout en haut, au début de la fonction...

- Si on écrit une fonction avec une minuscule au début : ce n'est PAS UN COMPOSANT ! 
Il faut mettre une majuscule au début du nom de la func' pour que React capte que c'est un COMPOSANT !!!

*/

import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import ItemForm01 from './ItemForm01';

export default function Form(){

    // La fonction useState est utilisée deux fois pour créer deux états différents :

    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chien", id: uuidv4()},
        {txt: "Sport", id: uuidv4()},
        {txt: "Coder avec React", id: uuidv4()}
    ])
    /* "dataArr" est un tableau d'objets qui contiennent une clé "txt" et une clé "id". Cet état est initialisé avec trois éléments, 
    chacun ayant un texte différent et un identifiant unique généré avec la librairie uuid. */

    const [stateInput, setStateInput] = useState();
    // "stateInput" est initialisé avec une valeur vide, il va être utilisé pour stocker la valeur de l'input qui permet d'ajouter des éléments à la liste.

    // Ensuite, il y a deux fonctions:

    const linkedInput = e => {
        setStateInput(e);
    }
    // "linkedInput" qui est appelée à chaque changement de l'input. Elle récupère la valeur de l'input et la stocke dans l'état "stateInput".

    const addTodo = e => {
        e.preventDefault();
        const newArr = [...dataArr];

        const newTodo = {};
        newTodo.txt = stateInput;
        newTodo.id = uuidv4();

        newArr.push(newTodo);
        setDataArr(newArr);
        
        setStateInput('');
    }
    /* "addTodo" qui est appelée à la soumission du formulaire. Elle crée un nouvel objet avec la valeur stockée dans "stateInput" et un identifiant unique généré avec uuid. 
    Elle ajoute ensuite cet objet à la fin du tableau "dataArr", met à jour l'état "dataArr" avec ce nouveau tableau et remet l'état "stateInput" à vide. */

    console.log(uuidv4());

    const deleteElement = id => {
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState)
    }
    /* Fonction de suppression d'élément qui est appelée avec l'identifiant unique de l'élément à supprimer.

    - utilise la méthode filter() pour créer un nouveau tableau filteredState qui contient tous 
    les éléments de dataArr à l'exception de celui dont l'ID correspond à l'ID passé en paramètre.

    - Enfin, elle utilise setDataArr(filteredState) pour mettre à jour l'état de dataArr en remplaçant 
    l'ancien tableau par le nouveau tableau filteredState, qui ne contient plus l'élément supprimé. 
    Ainsi, la liste affichée dans l'interface utilisateur sera mise à jour pour refléter les changements. */

    return(

        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

            <h1>Notre TODO-LIST</h1><br />
            <form onSubmit={e => addTodo(e)} className="mb-3">
                <label htmlFor="todo" className="mt-3 form-label">Chose à faire :</label><br />
                <input value={stateInput} onInput={e => linkedInput(e.target.value)} type="text" className="form-control" id="todo"/>
                <button className="mt-2 btn btn-primary">Envoyer</button>
            </form><br />

            <h2>Liste des choses à faire : </h2>
            <ul className="list-group">
                {dataArr.map(item => {
                    return(
                        <ItemForm01 
                        txt={item.txt}
                        key={item.id}
                        id={item.id}
                        delFunc={deleteElement}
                        />
                    )
                })}
                {/* il y a une boucle de rendu qui crée un élément "ItemForm01" pour chaque élément du tableau "dataArr". */}
            </ul>

        </div>

    );

}

/*

REGLES !!! INFOS hooks et fonctions :

- Les hooks : doivent être toujours dans la RACINE d'une fonction ! (pas dans une imbrication, etc...) en gros : tout en haut, au début de la fonction...

- Si on écrit une fonction avec une minuscule au début : ce n'est PAS UN COMPOSANT ! 
Il faut mettre une majuscule au début du nom de la func' pour que React capte que c'est un COMPOSANT !!!

*/
