import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal, Form } from 'react-bootstrap';
import dayjs from 'dayjs';

import './VaccineItem.scss';

import cancelIcon from '../../../../../assets/icons/close.png';


const VaccineItem = ({
    _id,
    pet_id,
    vaccineDate,
    vaccineName,
    deleteVaccine,
}) => {
    const history = useHistory();
    const [showDeleteVaccineModal, setShowDeleteVaccineModal] = useState(false);

    const handleCloseDeleteVaccineModal = () => setShowDeleteVaccineModal(false);
    const handleShowDeleteVaccineModal = () => setShowDeleteVaccineModal(true);

    const handleDeleteVaccine = () => {
        localStorage.setItem('vaccineToDelete', _id);
        deleteVaccine(_id);
        history.push(`/pet/${pet_id}/vaccine`);
    };

    return (
        <div className="vaccine-item" key={_id}>
            <div className="vaccine-item-content">
                <div className="vaccine-item-content-date">
                    <p>{dayjs(vaccineDate).format('DD/MM/YYYY')}
                    </p>
                </div>
                <div className="vaccine-item-content-value">
                    <p>{vaccineName}
                    </p>
                </div>
                <div className="vaccine-item-content-delete">
                    <button
                        type="button"
                        className="vaccine-item-content-delete__btn"
                        onClick={handleShowDeleteVaccineModal}
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
            <div className="vaccine-item-content-line" />
            
            <Modal show={showDeleteVaccineModal} onHide={handleShowDeleteVaccineModal} className="modal-delete-vaccine">
                <Modal.Header closeButton>
                    <Modal.Title>Supprimer ce vaccin ?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <button
                        type="button"
                        className="modal-delete-cancel-btn"
                        variant="secondary"
                        onClick={handleCloseDeleteVaccineModal}>
                        Annuler
                    </button>
                    <button
                        type="button"
                        className="modal-delete-validate-btn"
                        variant="primary"
                        onClick={handleDeleteVaccine}>
                        Oui, supprimer
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

VaccineItem.propTypes = {
    deleteVaccine: PropTypes.func.isRequired,
};


export default VaccineItem;
