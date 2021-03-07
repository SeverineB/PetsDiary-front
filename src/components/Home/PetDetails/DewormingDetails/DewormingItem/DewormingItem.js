import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal, Form } from 'react-bootstrap';
import dayjs from 'dayjs';

import './DewormingItem.scss';

import cancelIcon from '../../../../../assets/icons/close.png';

const DewormingItem = ({
    _id,
    pet_id,
    dewormingDate,
    dewormingName,
    deleteDeworming,
}) => {
    const history = useHistory();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);

    const handleDelete = () => {
        localStorage.setItem('dewormingToDelete', _id);
        deleteDeworming(_id);
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
                <div className="deworming-item-content-delete">
                    <button type="button" className="deworming-item-content-delete__btn" onClick={handleShowDeleteModal}>
                        <img src={cancelIcon} alt="brown croce" />
                    </button>
                </div>
            </div>
            <div className="deworming-item-content-line" />
          
            <Modal show={showDeleteModal} onHide={handleShowDeleteModal} className="modal-delete-deworming">
                <Modal.Header closeButton>
                    <Modal.Title>Supprimer ce vermifuge ?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <button type="button" className="modal-delete-cancel-btn" variant="secondary" onClick={handleCloseDeleteModal}>
                        Annuler
                    </button>
                    <button type="button" className="modal-delete-validate-btn" variant="primary" onClick={handleDelete}>
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
