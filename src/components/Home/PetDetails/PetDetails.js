/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import BarChart from '../../../containers/BarChart';

import './PetDetails.scss';

const PetDetails = ({
  pet,
  saveCurrentPet,
}) => {
  // useParams is used to retrieve the id in url params to filter the pet to display
  const params = useParams();

  useEffect(() => {
    console.log('je sauvegarde le pet courant qui est', pet);
    saveCurrentPet(pet);
  }, []);

  console.log('WEIGHT LIST ', pet.weight);

  return (
    <div className="pet-details">
      <Link to="/home">Retour à mes animaux</Link>
      <div className="pet-details-title">
        <h2>Suivi de {pet.name}</h2>
      </div>
      <div className="pet-details-content">
        <div className="pet-details-avatar">
          <img src={pet.avatarUrl} alt="profile avatar" />
        </div>
        <div className="pet-details-general">
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
        </div>
        <div className="pet-details-health">
          <div className="pet_details-list" key={pet._id}>
            <div className="info-sex">
              <h4>Sexe</h4>
              {pet.sex}
            </div>
            <div className="info-birthdate">
              <h4>Date de naissance</h4>
              {dayjs(pet.birthdate).format('DD/MM/YYYY')}
            </div>
            <div className="info-ide">
              <h4>Numéro d'identification</h4>
              {pet.ide}
            </div>
            <div className="info-weight">
              <BarChart petWeight={pet.weight} />
              <h4>Poids</h4>
              <h5>Date :</h5>
              <div className="pet-weight-list" key={pet._id}>
                {pet.weight.map((item) => (
                  <div className="pet-weight-items-date">
                    {dayjs(item.weightDate).format('DD/MM/YYYY')}
                  </div>
                ))}
                <h5>Poids :</h5>
                {pet.weight.map((item) => (
                  <div className="pet-weight-items-value">
                    {item.weightValue}
                  </div>
                ))}
              </div>
            </div>
            {/* 
            <div className="info-vaccine">
              <h4>Vaccins</h4>
              {petDetails.vaccine.map((vaccineItem) => (
                <div className="pet-vaccine-list" key={pet._id}>
                  <div className="pet-vaccine-items">
                    <h5>Date :</h5>
                    {dayjs(vaccineItem.date).format('DD/MM/YYYY')}
                  </div>
                  <div className="pet-vaccine-items">
                    <h5>Nom :</h5>
                    {vaccineItem.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="info-deworming">
             {/*  <h4>Anti-parasites</h4>
              {petDetails.deworming.map((dewormingItem) => (
                <div className="pet-deworming-list">
                  <div className="pet-deworming-items">
                    <h5>Date :</h5>
                    {dayjs(dewormingItem.date).format('DD/MM/YYYY')}
                  </div>
                  <div className="pet-deworming-items">
                    <h5>Nom :</h5>
                    {dewormingItem.value}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
        <Link to={`/pet/edit/${params.petId}`}>Editer les infos</Link>
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
    breed: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    ide: PropTypes.number.isRequired,
    weight: PropTypes.arrayOf(
      PropTypes.shape({}),
    ).isRequired,
  }).isRequired,
  saveCurrentPet: PropTypes.func.isRequired,
};

export default PetDetails;
