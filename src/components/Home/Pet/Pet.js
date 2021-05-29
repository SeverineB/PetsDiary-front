import React, { useEffect, useState }  from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import './pet.scss';

const PetCard = ({
    pet,
    name,
    avatarUrl,
    getPetsList
}) => {
    const petId = pet._id;

    const [showDeletePetModal, setShowDeletePetModal] = useState(false);

    const handleCloseDeletePetModal = () => setShowDeletePetModal(false);
    const handleShowDeletePetModal = () => setShowDeletePetModal(true);

    useEffect(() => {
        getPetsList();
    }, []);

    return (
        <>
            <Link to={`/pet/${petId}`}  className="pet-container">
                <div className="pet-item">
                    <div className="pet-avatar">
                        <img className="pet-avatar-img" src={avatarUrl} alt="profile avatar" />
                    </div>
                    <div className="pet-name">
                        <p>{name}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

PetCard.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    getPetsList: PropTypes.func.isRequired,
};

export default PetCard;
