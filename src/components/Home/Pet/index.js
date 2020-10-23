import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card,
  Icon,
  Image,
  Button,
} from 'semantic-ui-react';

import './pet.scss';

const PetCard = ({
  _id,
  name,
  age,
  species,
  breed,
  /*picture*/
  deletePets,
}) => {
  const petId = _id;
  console.log(petId);
  const handleDelete = () => {
    console.log('je veux supprimer cet animal' + petId);
    deletePets(petId);
  };

  return (
    <div className="pet-container">
      <div className="pet-avatar">
        photo
      </div>
      <div className="pet-name">
        {name}
      </div>
    </div>
  );
};

PetCard.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  /*picture: PropTypes.string.isRequired,*/
  deletePets: PropTypes.func.isRequired,
};

export default PetCard;
