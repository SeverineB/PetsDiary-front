import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal, Form } from 'react-bootstrap';
import dayjs from 'dayjs';

import './WeightItem.scss';

import cancelIcon from '../../../../../assets/icons/close.png';


const WeightItem = ({
    _id,
    pet_id,
    weightDate,
    weightValue,
    deleteWeight,
}) => {
    const history = useHistory();
    const [showDeleteWeightModal, setShowDeleteWeightModal] = useState(false);

    const handleCloseDeleteWeightModal = () => setShowDeleteWeightModal(false);
    const handleShowDeleteWeightModal = () => setShowDeleteWeightModal(true);

    const handleDeleteWeight = () => {
        localStorage.setItem('weightToDelete', _id);
        deleteWeight(_id);
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
                <div className="weight-item-content-delete">
                    <button
                        type="button"
                        className="delete-btn"
                        onClick={handleShowDeleteWeightModal}
                    >
                        <img src={cancelIcon} alt="brown croce" />

                    </button>
            </div>
            </div>
            <div className="weight-item-content-line" />
            
            <Modal show={showDeleteWeightModal} onHide={handleShowDeleteWeightModal} className="modal-delete-weight">
                <Modal.Header closeButton>
                    <Modal.Title>Supprimer ce poids ?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <button
                        type="button"
                        className="modal-delete-cancel-btn"
                        variant="secondary"
                        onClick={handleCloseDeleteWeightModal}>
                        Annuler
                    </button>
                    <button
                        type="button"
                        className="modal-delete-validate-btn"
                        variant="primary"
                        onClick={handleDeleteWeight}>
                        Oui, supprimer
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

WeightItem.propTypes = {
    deleteWeight: PropTypes.func.isRequired,
};


export default WeightItem;
