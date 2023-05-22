import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import './ItemForm01Mongo.css';

export default function ItemForm01(props) {

    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        // Appeler la fonction de suppression seulement si le modal est confirmé
        props.delFunc(props.id);
        // Fermer le modal après la suppression
        setShowModal(false);
    };

    return (
    <>
    <li className="border d-flex justify-content-between align-items-center p-2 m-2">
        <div className="p-3">{props.txt}</div>
        <button className="btn btn-danger p-2" onClick={() => setShowModal(true)}>Supprimer</button>
    </li>

        {/* Modal de confirmation */}
        {showModal && (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    <h2>Confirmation de suppression</h2>
                    <p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>
                    <div className="modal-buttons">
                        <button className="btn btn-danger" onClick={handleDelete}>
                            Oui
                        </button>
                        <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                            Non
                        </button>
                    </div>
                </div>
            </div>
        </div>
        )}
    </>
    );
}
