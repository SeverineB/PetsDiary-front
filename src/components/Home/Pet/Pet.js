import React from 'react';
import PropTypes from 'prop-types';

import './Pet.scss';

const PetCard = ({
  _id,
  name,
  avatarUrl,
  deletePets,
}) => {
  const petId = _id;

  const handleDelete = () => {
    console.log('je veux supprimer cet animal', petId);
    deletePets(petId);
  };

  return (
    <>
      <div className="pet-container">
        <div className="pet-avatar">
          <img src={avatarUrl} alt="profile avatar" />
        </div>
        <div className="pet-name">
          {name}
        </div>
      </div>
    </>
  );
};

PetCard.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  deletePets: PropTypes.func.isRequired,
  getPetDetails: PropTypes.func.isRequired,
  pet_details: PropTypes.arrayOf(
    PropTypes.shape({
    }),
  ).isRequired,
};

export default PetCard;
