import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal, Form } from 'react-bootstrap';
import dayjs from 'dayjs';

import './AntifleaItem.scss';

const AntifleaItem = ({
    _id,
    pet_id,
    antifleaDate,
    antifleaName,
    deleteAntiflea,
}) => {
    const history = useHistory();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    console.log('SHOW MODAL ', showDeleteModal);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);

    const handleDelete = () => {
        console.log('je supprime un item anti-puces', _id);
        localStorage.setItem('antifleaToDelete', _id);
        deleteAntiflea(_id);
        /* setShowDeleteModal(false); */
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
            </div>
            <div className="antiflea-item-content-line" />
            <div className="delete">
                <button type="button" className="delete-btn" onClick={handleShowDeleteModal}>supp</button>
            </div>
            <Modal show={showDeleteModal} onHide={handleShowDeleteModal} className="modal-add-antiflea">
                <Modal.Header closeButton>
                    <Modal.Title>Supprimer cet anti-puces ?</Modal.Title>
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

AntifleaItem.propTypes = {
    deleteAntiflea: PropTypes.func.isRequired,
};


export default AntifleaItem;
