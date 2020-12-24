/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Link, useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import backIcon from '../../../assets/icons/left-arrow-2.png';

import './PetDetails.scss';

const PetDetails = ({
    pet,
    saveCurrentPet,
    saveCurrentWeight,
    saveCurrentVaccine,
    deletePet,
}) => {
    const [showDetails, setShowDetails] = useState(false);
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

    
    const handleDelete = () => {
        deletePet(pet._id);
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
                {/* <div className="pet-details-title">
                    <h2>{pet.name}</h2>
                </div> */}
                <div className="pet-details-content-infos">
                    <div className="pet-details-content-infos-avatar">
                        <img src={pet.avatarUrl} alt="profile avatar" />
                    </div>
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
                    <Link to={`/pet/${pet._id}/weight`}>Poids</Link>
                    <Link to={`/pet/${pet._id}/vaccine`}>Vaccins</Link>
                    <Link to={`/pet/${pet._id}/antiflea`}>Anti-puces</Link>
                    <Link to={`/pet/${pet._id}/deworming`}>Vermifuge</Link>
                </div>
            </div>
            <button className="pet-delete-btn" type="button" onClick={handleDelete}>
                supprimer
            </button>
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
        ide: PropTypes.number,
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
};

PetDetails.defaultProps = {
    breed: '',
    ide: null,
}

export default PetDetails;
