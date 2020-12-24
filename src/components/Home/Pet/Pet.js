import React from 'react';
import PropTypes from 'prop-types';

import './Pet.scss';

const PetCard = ({
    _id,
    name,
    avatarUrl,
}) => {
const petId = _id;


return (
    <>
        <div className="pet-container">
            <div className="pet-avatar">
                <img src={avatarUrl} alt="profile avatar" />
            </div>
            <div className="pet-name">
                <p>{name}</p>
            </div>
        </div>
    </>
);
};

PetCard.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
};

export default PetCard;
