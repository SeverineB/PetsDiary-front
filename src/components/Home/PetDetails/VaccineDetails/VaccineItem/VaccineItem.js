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
                        <img src={cancelIcon} alt="brown croce" />

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
