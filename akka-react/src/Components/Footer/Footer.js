import './Footer.css';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Footer (){

    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
        setShowModal(true);
    };
    // Gérer ou Manipuler ("Handle") la donnée

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <footer>

            <br />
            <p>Fin de page... LE FOOTER</p>
            <p>
                Nous contacter ? Cliquez : {}
            <button className="btn btn-success p-2" onClick={handleModalOpen}> ici </button>
            </p>
            <br />

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                <Modal.Title>Informations de contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Akkodis</p>
                    <p>05.01.02.03.04</p>
                    <p>akkodis@mail.com</p>
                </Modal.Body>
                <Modal.Footer>
                    <p>
                        1 bouton "Fermer" + 1 croix pour fermer la Modal : <br /> 
                        Oui c'est inutile, MAIS c'est pour tester 2 façons de faire (VOIR LE CODE...)
                    </p>
                    <Button variant="secondary" onClick={handleModalClose}>Fermer</Button>
                </Modal.Footer>
            </Modal>

        </footer>
    );
}

export default Footer;
