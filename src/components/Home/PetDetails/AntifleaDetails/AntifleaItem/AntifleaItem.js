import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal, Form } from 'react-bootstrap';
import dayjs from 'dayjs';

import './AntifleaItem.scss';

import cancelIcon from '../../../../../assets/icons/close.png';

const AntifleaItem = ({
    _id,
    pet_id,
    antifleaDate,
    antifleaName,
    deleteAntiflea,
}) => {
    const history = useHistory();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);

    const handleDelete = () => {
        localStorage.setItem('antifleaToDelete', _id);
        deleteAntiflea(_id);
        history.push(`/pet/${pet_id}/antiflea`);
    };

    return (
        <div className="antiflea-item" key={_id}>
            <div className="antiflea-item-content">
                <div className="antiflea-item-content-date">
                    <p>{dayjs(antifleaDate).format('DD/MM/YYYY')}
                    </p>
                </div>
                <div className="antiflea-item-content-value">
                    <p>{antifleaName}
                    </p>
                </div>
                <div className="antiflea-item-content-delete">
                    <button type="button" className="antiflea-item-content-delete__btn" onClick={handleShowDeleteModal}>
                        <img src={cancelIcon} alt="brown croce" />
                    </button>
                </div>
            </div>
            <div className="antiflea-item-content-line" />
          
            <Modal show={showDeleteModal} onHide={handleShowDeleteModal} className="modal-delete-antiflea">
                <Modal.Header closeButton>
                    <Modal.Title>Supprimer cet anti-puces ?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <button type="button" variant="secondary" onClick={handleCloseDeleteModal}  className="modal-delete-cancel-btn">
                        Annuler
                    </button>
                    <button type="button" variant="primary" onClick={handleDelete} className="modal-delete-validate-btn">
                        Oui, supprimer
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

AntifleaItem.propTypes = {
    deleteAntiflea: PropTypes.func.isRequired,
};


export default AntifleaItem;
