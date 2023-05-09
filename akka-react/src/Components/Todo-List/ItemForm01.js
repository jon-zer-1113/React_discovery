
export default function ItemForm01(props) {

    return (
    <li className="border d-flex justify-content-between align-items-center p-2 m-2">
        <div className="p-3">{props.txt}</div>
        <button className="btn btn-danger p-2" onClick={() => props.delFunc(props.id)}>Supprimer</button>
    </li>
    )
}

// 'ItemForm01' représente un élément individuel de la liste 'Form'.


/* 
Les longues classes Bootstrap :

LI:
- border : ça rajoute des bordures.
- d-flex : ça fait display flex.
- justify-content-between : on met de l'espace entre les elements.
- align-items-center : on les centre.
- p-2 + m-2 : on met un peu de padding et de margin.

BUTTON:
- btn : un boutton tout simplement.
- btn-danger : le bouton en "rouge danger".
*/
