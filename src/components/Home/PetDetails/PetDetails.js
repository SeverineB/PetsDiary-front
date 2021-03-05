/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

import backIcon from '../../../assets/icons/left-arrow-2.png';
import cancelIcon from '../../../assets/icons/close.png';
import weightIcon from '../../../assets/icons/kitchen-scale.png';
import vaccineIcon from '../../../assets/icons/syringe.png';
import fleaIcon from '../../../assets/icons/flea.png';
import wormIcon from '../../../assets/icons/jelly.png';

import './PetDetails.scss';

const PetDetails = ({
    pet,
    saveCurrentPet,
    saveCurrentWeight,
    saveCurrentVaccine,
    savePetToDelete,
    deletePetOnScreen,
    deletePet,
}) => {
    const [showDetails, setShowDetails] = useState(false);
    const [showDeletePetModal, setShowDeletePetModal] = useState(false);

    const handleCloseDeletePetModal = () => setShowDeletePetModal(false);
    const handleShowDeletePetModal = () => setShowDeletePetModal(true);

    // useParams is used to retrieve the id in url params to filter the pet to display
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        setShowDetails(true);
        saveCurrentPet(pet);
        saveCurrentWeight(pet.weight);
        saveCurrentVaccine(pet.vaccine);
        localStorage.setItem('pet_id', pet._id);
    }, []);
    
    const handleDeletePet = () => {
        savePetToDelete(pet._id);
        deletePet();
        deletePetOnScreen(pet._id);
        history.push('/home');
    };

    return (
        <div className={showDetails ? 'pet-details' : 'pet-details-hidden'}>
            <Link to="/home">
                <div className="back-icon-container">
                    <img className="back-icon" src={backIcon} alt="left arrow" />
                </div>
            </Link>
            
            <div className="pet-details-content">
                <div className="pet-details-content-infos">
                    <div className="pet-details-content-infos-avatar">
                        <img src={pet.avatarUrl} alt="profile avatar" />
                    </div>
                    <div className="pet-delete">
                        <button className="pet-delete-btn" type="button" onClick={handleShowDeletePetModal}>
                            <img src={cancelIcon} alt="cancel croce" />
                        </button>
                    </div>
                    <Modal show={showDeletePetModal} onHide={handleShowDeletePetModal} className="modal-delete-pet">
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
                    </Modal>
                    <div className="pet-details-content-infos-general">
                        <div className="pet-details-name">
                            <h3>Nom :</h3>
                            <p>{pet.name}</p>
                        </div>
                        <div className="pet-details-age">
                            <h3>Age :</h3>
                            <p>{pet.age}</p>
                        </div>
                        <div className="pet-details-species">
                            <h3>Espèce :</h3>
                            <p>{pet.species}</p>
                        </div>
                        <div className="pet-details-breed">
                            <h3>Race :</h3>
                            <p>{pet.breed}</p>
                        </div>
                        <div className="info-sex">
                            <h3>Sexe :</h3>
                            <p>{pet.sex}</p>
                        </div>
                        <div className="info-birthdate">
                            <h3>Date de naissance :</h3>
                            <p>{dayjs(pet.birthdate).format('DD/MM/YYYY')}</p>
                        </div>
                        <div className="info-ide">
                            <h3>Numéro d'identification :</h3>
                            <p>{pet.ide}</p>
                        </div>
                        <div className="edit-link">
                            <button type="button" className="edit-btn">
                                <Link to={`/pet/edit/${params.petId}`}>Editer</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="details-links">
                    <div>
                        <Link className="details-links-item" to={`/pet/${pet._id}/weight`}>
                            <img src={weightIcon} alt="weight tool" />
                            <p>Poids</p>
                        </Link>
                    </div>
                    <div>
                        <Link className="details-links-item" to={`/pet/${pet._id}/vaccine`}>
                            <img src={vaccineIcon} alt="vaccine syringe" />
                            <p>Vaccins</p>
                        </Link>
                    </div>
                    <div>
                        <Link className="details-links-item" to={`/pet/${pet._id}/antiflea`}>
                            <img src={fleaIcon} alt="flea" />
                            <p>Anti-puces</p>
                        </Link>
                    </div>
                    <div>
                        <Link className="details-links-item" to={`/pet/${pet._id}/deworming`}>
                            <img src={wormIcon} alt="worms" />
                            <p>Vermifuge</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

PetDetails.propTypes = {
    pet: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        breed: PropTypes.string,
        sex: PropTypes.string.isRequired,
        birthdate: PropTypes.string.isRequired,
        ide: PropTypes.string,
        weight: PropTypes.arrayOf(
            PropTypes.shape({}),
        ).isRequired,
        deworming: PropTypes.arrayOf(
            PropTypes.shape({}),
        ).isRequired,
        vaccine: PropTypes.arrayOf(
            PropTypes.shape({}),
        ).isRequired,
        antiflea: PropTypes.arrayOf(
            PropTypes.shape({}),
        ).isRequired,
    }).isRequired,
    saveCurrentPet: PropTypes.func.isRequired,
    deletePet: PropTypes.func.isRequired,
    deletePetOnScreen: PropTypes.func.isRequired,
    savePetToDelete: PropTypes.func.isRequired,
};

PetDetails.defaultProps = {
    breed: '',
    ide: '',
}

export default PetDetails;
