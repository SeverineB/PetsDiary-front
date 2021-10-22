import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './pet.scss';

const Pet = ({
    pet,
    name,
    sex,
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
                        {(sex === 'mâle') ? (
                           <svg id="Layer_1" height="512" viewBox="0 0 50 50" width="512" xmlns="http://www.w3.org/2000/svg"><g>
                               <path d="m45.8 1.7h-13.8c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h7.7l-9.2 9.2c-7.1-5.3-17.2-4.8-23.6 1.6-7 7-7 18.5 0 25.5s18.5 7 25.5 0c6.4-6.4 7-16.6 1.6-23.6l9.2-9.2v7.8c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5v-13.8c.1-1.4-1-2.5-2.4-2.5zm-16.8 37.8c-5.1 5.1-13.4 5.1-18.5 0s-5.1-13.4 0-18.5 13.4-5.1 18.5 0 5.1 13.4 0 18.5z"/></g></svg>)
                           :
                            (
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="477.141px" height="477.141px" viewBox="0 0 477.141 477.141">
                                    <g>
                                        <path d="M326.711,341.99h-64.628v-64.634c0-0.686-0.142-1.323-0.213-1.997c65.409-11.119,115.378-68.161,115.378-136.681
                                            C377.249,62.208,315.044,0,238.571,0C162.103,0,99.892,62.208,99.892,138.678c0,68.521,49.973,125.562,115.375,136.681
                                            c-0.059,0.674-0.204,1.312-0.204,1.997v64.634h-64.631c-12.983,0-23.501,10.527-23.501,23.502c0,12.98,10.518,23.507,23.501,23.507
                                            h64.637v64.64c0,12.98,10.524,23.502,23.501,23.502c12.979,0,23.513-10.527,23.513-23.502v-64.64h64.628
                                            c12.986,0,23.508-10.526,23.508-23.507C350.219,352.518,339.698,341.99,326.711,341.99z M146.904,138.678
                                            c0-50.546,41.121-91.673,91.667-91.673c50.549,0,91.676,41.122,91.676,91.673s-41.127,91.667-91.676,91.667
                                            C188.031,230.346,146.904,189.224,146.904,138.678z"/>
                                    </g>
                                </svg>
                            )
                        }
                    </div>
                </div>
            </Link>
        </>
    );
};

Pet.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    getPetsList: PropTypes.func.isRequired,
};

export default Pet;
