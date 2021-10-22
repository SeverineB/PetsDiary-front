/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Pet from '../../containers/Pet';
import  cat from '../../assets/images/Cat_transparent.png';
import { filterBy, groupBy } from '../../../src/fun';

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

    useEffect(() => {
        clearCurrentPet()
        getPetsList()
        getEventsList()

    }, [])

    const username = localStorage.getItem('username');

    // filter, sort and group events by date
    // to only display futures events
    const filteredArray = filterBy(eventsList, 'start')
    const sortedArray = filteredArray.sort((a, b) => new Date(a.start) - new Date(b.start))
    const groupedByDates = Object.keys(groupBy(sortedArray, 'start')).map((key) => [key, groupBy(sortedArray, 'start')[key]])

    const formatDate = (date) => {
        if (date) {
            const formattedDate = new Date(date)
            const day = formattedDate.getDate()
            const month = formattedDate.getMonth()+1
            const year = formattedDate.getFullYear()
            return `${day}/${month}/${year}`
        }
    }   

    return (
        <>
        <div className="home-container">
                {isLogged && (
                    <Alert>
                        <p>Vous êtes bien connecté(e) <strong>{username}</strong></p>
                    </Alert>
                )}
            <div className="section pets-section">
                <div className="section-title flex-row">
                    <h2 className="section-title-text">Mes animaux</h2>
                    <div className="add-pet-button">
                        <Link to="/pet/add" title="Ajouter un animal">
                            <svg version="1.1" id="Capa_1"x="0px" y="0px" viewBox="0 0 45.402 45.402" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
                                        c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
                                        c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
                                        c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="pets-list">
                    {petsList.map((pet) => (
                        <Pet {...pet} pet={pet} key={pet._id}/>
                    ))}
                </div>
            </div>

            <div className="section events-section">
                <div className="section-title">
                    <h2 className="section-title-text">Rendez-vous à venir</h2>
                </div>
                <div className="events-list">
                    {groupedByDates.map(item => (
                        <div key={item._id} className="event-container">
                            <div className="event-container-date">
                                <p>{formatDate(item[0])}</p>
                            </div>
                            {item[1].length > 1 && (
                                item[1].map(subItem => (
                                    <div className="event-container-content" key={subItem._id}>
                                        <p className="event-container-content-name">{subItem.petName} :</p>
                                        <p className="event-container-content-title">{subItem.title}</p>
                                    </div>
                                ))
                            )}
                            {item[1].length == 1 && (
                                <div className="event-container-content">
                                    <p className="event-container-content-name">{item[1][0].petName} :</p>
                                    <p className="event-container-content-title">{item[1][0].title}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
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
