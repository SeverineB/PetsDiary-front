import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal, Form } from 'react-bootstrap';
import dayjs from 'dayjs';

import './DewormingItem.scss';

const DewormingItem = ({
    _id,
    pet_id,
    dewormingDate,
    dewormingName,
    deleteDeworming,
}) => {
    const history = useHistory();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    console.log('SHOW MODAL ', showDeleteModal);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);

    const handleDelete = () => {
        console.log('je supprime un item vermifuge', _id);
        localStorage.setItem('dewormingToDelete', _id);
        deleteDeworming(_id);
        /* setShowDeleteModal(false); */
        history.push(`/pet/${pet_id}/deworming`);
    };

    return (
        <div className="deworming-item" key={_id}>
            <div className="deworming-item-content">
                <div className="deworming-item-content-date">
                    <p>{dayjs(dewormingDate).format('DD/MM/YYYY')}
                    </p>
                </div>
                <div className="deworming-item-content-value">
                    <p>{dewormingName}
                    </p>
                </div>
            </div>
            <div className="deworming-item-content-line" />
            <div className="delete">
                <button type="button" className="delete-btn" onClick={handleShowDeleteModal}>supp</button>
            </div>
            <Modal show={showDeleteModal} onHide={handleShowDeleteModal} className="modal-add-deworming">
                <Modal.Header closeButton>
                    <Modal.Title>Supprimer ce vermifuge ?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <button type="button" variant="secondary" onClick={handleCloseDeleteModal}>
                        Annuler
                    </button>
                    <button type="button" variant="primary" onClick={handleDelete}>
                        Oui, supprimer
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

DewormingItem.propTypes = {
    deleteDeworming: PropTypes.func.isRequired,
};


export default DewormingItem;
