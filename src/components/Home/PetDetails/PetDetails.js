import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import './PetDetails.scss';

const PetDetails = ({ pet, saveCurrentPet }) => {
  // useParams is used to retrieve the id in url params to filter the pet to display
  const params = useParams();

  useEffect(() => {
    console.log('je sauvegarde le pet courant');
    saveCurrentPet(pet);
  }, []);

  console.log('PET IN PET DETAILS FROM CONTAINER', pet);
  console.log('PARAMS ID', params.petId);
  return (
    <div className="pet-details">
      <Link to="/home">Retour à mes animaux</Link>
      <div className="pet-details-title">
        <h2>Suivi de mon animal</h2>
      </div>
      <div className="pet-details-content">
        <div className="pet-details-avatar">
          <img src={pet.avatarUrl} alt="profile avatar" />
        </div>
        <div className="pet-details-name">
          <h3>Nom</h3>
          {pet.name}
        </div>
        <div className="pet-details-age">
          <h3>Age</h3>
          {pet.age}
        </div>
        <div className="pet-details-species">
          <h3>Espèce</h3>
          {pet.species}
        </div>
        <div className="pet-details-breed">
          <h3>Race</h3>
          {pet.breed}
        </div>
        <div className="pet-details-health">
          <h3>Suivi</h3>
          {pet.pet_details.map((info) => (
            <>
              <div className="info-birthdate">
                <h4>Date de naissance</h4>
                {info.birthdate}
              </div>
              <div className="info-ide">
                <h4>Numéro d'identification</h4>
                {info.ide}
              </div>
              <div className="info-vaccine">
                <h4>Vaccins</h4>
                {info.vaccine.map((vaccineItem) => (
                  <>
                    <div className="pet-vaccine-items">
                      <h5>Date :</h5>
                      {vaccineItem.date}
                    </div>
                    <div className="pet-vaccine-items">
                      <h5>Nom :</h5>
                      {vaccineItem.name}
                    </div>
                  </>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
      <Link to={`/pet/edit/${params.petId}`}>Editer les infos</Link>
    </div>
  );
};

PetDetails.propTypes = {
  pet: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    pet_details: PropTypes.arrayOf(
      PropTypes.shape({
        birthdate: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
  saveCurrentPet: PropTypes.func.isRequired,
};

export default PetDetails;
