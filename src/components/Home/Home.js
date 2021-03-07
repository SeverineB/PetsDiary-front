/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Pet from '../../containers/Pet';

import logo from '../../assets/img/LogoPetsDiary.png';

import './home.scss';

const Home = ({
    isLogged,
    logout,
    clearCurrentPet,
    getPetsList,
    petsList,
    getEventsList,
    eventsList
}) => {
    console.log('ISLOGGED DANS HOME ', isLogged);
    console.log('PETSLIST DANS HOME ', petsList);
    console.log('EVENTSLIST DANS HOME ', eventsList);
    useEffect(() => {
        clearCurrentPet();
        getPetsList();
        getEventsList();
    }, []);

    const username = localStorage.getItem('username');

    const handleLogout = () => {
        logout();
    };

    return (
        <>
        <div className="home-container">
                {isLogged && (
                    <Alert>
                        <p>Vous êtes bien connecté(e) {username}</p>
                    </Alert>
                )}
            <div className="pets-section">
            <h2 className="pets-section-title">Mes animaux</h2>
            
            <div className="pets-list">
                {petsList.map((pet) => (
                    <Pet {...pet} pet={pet} key={pet._id}/>
                ))}
            </div>
            </div>
            <div className="appointments-section">
            <Link to="/event">Mes rendez-vous</Link>
            </div>
            <div className="add-pet-button">
                <Link to="/pet/add">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 457.47 457.469">
                        <g>
                            <path d="M228.734,0C102.41,0,0,102.41,0,228.735C0,355.06,102.41,457.469,228.734,457.469
                                c126.325,0,228.735-102.409,228.735-228.734C457.47,102.41,355.06,0,228.734,0z M359.268,265.476h-97.326v97.315
                                c0,16.668-13.506,30.186-30.181,30.186c-16.668,0-30.189-13.518-30.189-30.186v-97.315h-97.309
                                c-16.674,0-30.192-13.512-30.192-30.187c0-16.674,13.518-30.188,30.192-30.188h97.315v-97.31c0-16.674,13.515-30.183,30.189-30.183
                                c16.675,0,30.187,13.509,30.187,30.183v97.315h97.314c16.669,0,30.192,13.515,30.192,30.188
                                C389.46,251.97,375.937,265.476,359.268,265.476z"/>
                        </g>
                    </svg>
                </Link>
            </div>
            <div className="logout">
                <button type="submit" className="logout-button" onClick={handleLogout}>Déconnexion</button>
            </div>
        </div>
        </>
    );
};

Home.propTypes = {
    clearCurrentPet: PropTypes.func.isRequired,
    getPetsList: PropTypes.func.isRequired,
    getEventsList: PropTypes.func.isRequired,
    isLogged: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    petsList: PropTypes.arrayOf(
        PropTypes.shape({
        _id: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default Home;
