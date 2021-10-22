import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal, Form } from 'react-bootstrap';
import dayjs from 'dayjs';

import './WeightItem.scss';

import cancelIcon from '../../../../../assets/icons/close.png';

const WeightItem = ({
    _id,
    weightDate,
    weightValue,
    deleteWeight,
}) => {
    const [showDeleteWeightModal, setShowDeleteWeightModal] = useState(false);

    const handleCloseDeleteWeightModal = () => setShowDeleteWeightModal(false);
    const handleShowDeleteWeightModal = () => setShowDeleteWeightModal(true);

    const handleDeleteWeight = () => {
        localStorage.setItem('weightToDelete', _id);
        deleteWeight(_id);
        setShowDeleteWeightModal(false)
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
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" width="512" height="512" viewBox="0 0 24 24">
                            <path d="M19,7a1,1,0,0,0-1,1V19.191A1.92,1.92,0,0,1,15.99,21H8.01A1.92,1.92,0,0,1,6,19.191V8A1,1,0,0,0,4,8V19.191A3.918,3.918,0,0,0,8.01,23h7.98A3.918,3.918,0,0,0,20,19.191V8A1,1,0,0,0,19,7Z"/>
                            <path d="M20,4H16V2a1,1,0,0,0-1-1H9A1,1,0,0,0,8,2V4H4A1,1,0,0,0,4,6H20a1,1,0,0,0,0-2ZM10,4V3h4V4Z"/>
                            <path d="M11,17V10a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Z"/>
                            <path d="M15,17V10a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Z"/>
                        </svg>


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
