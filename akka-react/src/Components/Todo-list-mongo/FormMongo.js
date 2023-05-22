// Ma Todo-list avec MONGODB !

import {useState, useEffect} from 'react';
// Permet d'importer les hooks useState et useEffect du module react.
// Ces hooks sont utilisés pour gérer respectivement l'état local et les effets de côté dans le composant.
import ItemForm01Mongo from './ItemForm01Mongo';

export default function FormMongo(){
    // fonction "FormMongo" définie comme un composant React

    const [dataArr, setDataArr] = useState([]);
    // Je déclare une variable d'état "dataArr" avec une valeur initiale vide []
    // (Le hook "useState" permet de gérer l'état local dans un composant fonctionnel.)
    // "setDataArr" est la fonction qui permet de la mettre à jour. 

    const [stateInput, setStateInput] = useState();
    // Ici : une autre variable d'état (sans valeur initiale spécifiée) Cela signifie que la valeur initiale de stateInput sera undefined. 
    // Cette variable est utilisée pour stocker la valeur saisie dans le champ de texte.

    const linkedInput = e => {
        setStateInput(e);
    }
    // FONCTION : fonction définie pour mettre à jour l'état stateInput lorsqu'un événement de modification de champ de texte se produit. 
    // Elle reçoit l'événement e et utilise setStateInput pour mettre à jour la valeur de stateInput en utilisant e comme valeur.

    useEffect(() => {
        fetch('https://localhost:7124/api/Elements')
        .then(response =>{
            console.log(response);
            return response.json();
        })
        // METHODE ".then" est utilisée pour gérer la réponse de la requête. 
        // Lorsque la réponse est reçue, on la convertit en JSON en utilisant .json().
        .then(data => {
            console.log(data);
            setDataArr(data);
        })
        // Ici, mettre à jour l'état dataArr avec les données reçues de l'API.
        .catch((error) => {
            console.error('Erreur lors de la récupération des données', error);
        });
        // METHODE ".catch" pour gérer les erreurs qui pourraient survenir lors de la requête ou de la conversion en JSON.
    }, []);
    // Cette requête est déclenchée une seule fois, lors du montage initial du composant FormMongo, 
    // car le tableau vide [] est passé comme dépendance, indiquant qu'il n'y a aucune variable à surveiller pour déclencher l'effet.

    /////////////////////////////////////////////////////////////////////////////


    const addElementMongo = e => {
        e.preventDefault();
        // prend un événement "e" en argument et utilise e.preventDefault() 
        // pour empêcher le comportement par défaut du formulaire qui est de recharger la page.

        const newElement = {
            txt: stateInput
        };
        // objet "newElement" est créé avec la valeur actuelle de stateInput.

        fetch('https://localhost:7124/api/Elements', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(newElement)
    })
        .then(response => {
            if (response.ok){
                return response.json();
            } else {
                throw new Error('Erreur lors de l\'ajout de l\'élément');
            }
        })
        .then(data => {
            // Ajout réussi, mise à jour de la liste avec le nouvel élément
            const updatedDataArr = [...dataArr, data];
            setDataArr(updatedDataArr);
            setStateInput('');
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout de l\'élément', error);
        });
    };

    const deleteElementMongo = (id) => {
        fetch('https://localhost:7124/api/Elements/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok){
                // Suppression réussie, mise à jour de la liste
                const updateDataArr = dataArr.filter(item => item.id !== id);
                setDataArr(updateDataArr);
            } else {
                // Gestion des erreurs en cas de problème lors de la suppression
                console.error('Erreur lors de la supression de l\'element');
            }
        })
        .catch(error => {
            console.error('Erreur lors de la supression de l\'element', error);
        });
    };

    // La fonction "FormMongo" retourne le JSX (syntaxe proche de HTML) qui représente l'interface utilisateur du composant.
    return(
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

            <h1>Notre TODO-LIST with MongoDB ;-) </h1>

            <br />
            <form onSubmit={addElementMongo} className="mb-3">
                <label htmlFor="todo" className="mt-3 form-label">Chose à faire :</label>
                <br />
                <input value={stateInput} onInput={e => linkedInput(e.target.value)} type="text" className="form-control" id="todo"/>
                <button className="mt-2 btn btn-primary">Ajouter</button>
            </form><br />

            <h2>Liste des choses à faire : </h2>

            <ul className="list-group">
                {dataArr.map(item => {
                    return(
                        <ItemForm01Mongo 
                        txt={item.txt}
                        key={item.id}
                        id={item.id}
                        delFunc={deleteElementMongo}
                        />
                    )
                })}
            </ul>

        </div>
    );
}
