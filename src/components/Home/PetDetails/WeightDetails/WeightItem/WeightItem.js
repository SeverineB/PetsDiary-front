import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal, Form } from 'react-bootstrap';
import dayjs from 'dayjs';

import './WeightItem.scss';

const WeightItem = ({
    _id,
    pet_id,
    weightDate,
    weightValue,
    deleteWeight,
}) => {
    const history = useHistory();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    console.log('SHOW MODAL ', showDeleteModal);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);

    const handleDelete = () => {
        console.log('je supprime un item poids', _id);
        localStorage.setItem('weightToDelete', _id);
        deleteWeight(_id);
        /* setShowDeleteModal(false); */
        history.push(`/pet/${pet_id}/weight`);
    };

    return (
        <div className="weight-item" key={_id}>
            <div className="weight-item-content">
                <div className="weight-item-content-date">
                    <p>{dayjs(weightDate).format('DD/MM/YYYY')}
                    </p>
                </div>
                <div className="weight-item-content-value">
                    <p>{weightValue} kg
                    </p>
                </div>
            </div>
            <div className="weight-item-content-line" />
            <div className="delete">
                <button type="button" className="delete-btn" onClick={handleDelete}>supp</button>
            </div>
            {/* <div className="delete">
                <button type="button" className="delete-btn" onClick={handleShowDeleteModal}>supp</button>
            </div>
            <Modal show={showDeleteModal} onHide={handleShowDeleteModal} className="modal-add-weight">
            <Modal.Header closeButton>
                <Modal.Title>Supprimer ce poids ?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Souhaitez-vous supprimer ce poids ?</Modal.Body>
            <Modal.Footer>
                <button type="button" variant="secondary" onClick={handleCloseDeleteModal}>
                Annuler
                </button>
                <button type="button" variant="primary" onClick={handleDelete}>
                Oui, supprimer
                </button>
            </Modal.Footer>
            </Modal> */}
        </div>
    );
};

WeightItem.propTypes = {
    deleteWeight: PropTypes.func.isRequired,
};


export default WeightItem;
