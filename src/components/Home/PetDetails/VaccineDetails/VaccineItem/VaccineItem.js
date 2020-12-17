import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal, Form } from 'react-bootstrap';
import dayjs from 'dayjs';

import './VaccineItem.scss';

const VaccineItem = ({
    _id,
    pet_id,
    vaccineDate,
    vaccineName,
    deleteVaccine,
}) => {
    const history = useHistory();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    console.log('SHOW MODAL ', showDeleteModal);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);

    const handleDelete = () => {
        console.log('je supprime un item vaccin', _id);
        localStorage.setItem('vaccineToDelete', _id);
        deleteVaccine(_id);
        /* setShowDeleteModal(false); */
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
            </div>
            <div className="vaccine-item-content-line" />
            <div className="delete">
                <button type="button" className="delete-btn" onClick={handleShowDeleteModal}>supp</button>
            </div>
            <Modal show={showDeleteModal} onHide={handleShowDeleteModal} className="modal-add-vaccine">
                <Modal.Header closeButton>
                    <Modal.Title>Supprimer ce vaccin ?</Modal.Title>
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

VaccineItem.propTypes = {
    deleteVaccine: PropTypes.func.isRequired,
};


export default VaccineItem;
