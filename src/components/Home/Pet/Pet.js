import React, { useEffect, useState }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';


import { useHistory } from 'react-router-dom';


import './pet.scss';

import cancelIcon from '../../../assets/icons/close.png';


const PetCard = ({
    pet,
    _id,
    name,
    avatarUrl,
    savePetToDelete,
    deletePetOnScreen,
    deletePet,
    getPetsList
}) => {
    const history = useHistory();
    const petId = pet._id;
    console.log('pet id in pet card', petId)

    const [showDeletePetModal, setShowDeletePetModal] = useState(false);

    const handleCloseDeletePetModal = () => setShowDeletePetModal(false);
    const handleShowDeletePetModal = () => setShowDeletePetModal(true);

    useEffect(() => {
        getPetsList();
    }, []);

    // 
  /*   const handleDeletePet = () => {
        savePetToDelete(petId);
        deletePet();
        deletePetOnScreen(petId);
        history.push('/home');
    }; */


    return (
        <>
            <div className="pet-container">
                {/* <div className="pet-delete">
                    <button className="pet-delete-btn" type="button" onClick={handleShowDeletePetModal}>
                        <img src={cancelIcon} alt="cancel croce" />
                    </button>
                </div> */}
                <Link to={`/pet/${petId}`} className="pet-item">
                    <div className="pet-avatar">
                        <img className="pet-avatar-img" src={avatarUrl} alt="profile avatar" />
                    </div>
                    <div className="pet-name">
                        <p>{name}</p>
                    </div>
                </Link>
                {/* <Modal show={showDeletePetModal} onHide={handleShowDeletePetModal} className="modal-delete-pet">
                <Modal.Header closeButton>
                    <Modal.Title>Supprimer cet animal?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <button
                        type="button"
                        className="modal-delete-cancel-btn"
                        variant="secondary"
                        onClick={handleCloseDeletePetModal}>
                        Annuler
                    </button>
                    <button
                        type="button"
                        className="modal-delete-validate-btn"
                        variant="primary"
                        onClick={handleDeletePet}>
                        Oui, supprimer
                    </button>
                </Modal.Footer>
            </Modal> */}
            </div>
        </>
    );
};

PetCard.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    /* deletePet: PropTypes.func.isRequired,
    deletePetOnScreen: PropTypes.func.isRequired,
    savePetToDelete: PropTypes.func.isRequired, */
    getPetsList: PropTypes.func.isRequired,
};

export default PetCard;
