import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import dayjs from 'dayjs';

import VaccineItem from '../../../../containers/VaccineItem';
import backIcon from '../../../../assets/icons/left-arrow.png';

import './VaccineDetails.scss';

const VaccineDetails = ({
    pet,
    changeField,
    addVaccine,
    setErrors,
    error
}) => {
    const petVaccine = pet.vaccine;
    const history = useHistory();
    const [showVaccine, openShowVaccine] = useState(false);

    const petId = localStorage.getItem('pet_id');

    const closeShowVaccine = () => {  
        setErrors('vaccineDate', '');
        setErrors('vaccineName', '');
        openShowVaccine(false);
    }

    const checkDate = (value) => {
        if (!value) {
            setErrors('vaccineDate', 'La date doit être sélectionnée')
        } else {
            setErrors('vaccineDate', '');
        }
        return true;
    }

    const checkValue = (value) => {
        if (!value) {
            setErrors('vaccineName', 'Le nom doit être renseigné')
        } else {
            setErrors('vaccineName', '');
        }
        return true;
    }

    const handleChange = (evt) => {
        evt.preventDefault();
        changeField(evt.target.value, evt.target.name);
        switch (evt.target.name) {
            case 'vaccineDate':
              checkDate(evt.target.value);
              break;
            case 'vaccineName':
              checkValue(evt.target.value);
              break;
            default:
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addVaccine();
        openShowVaccine(false);
    }

    return (
        <div className="vaccine-container">
          <h2 className="vaccine-container-title">Suivi des vaccins</h2> 
            <div className="vaccine-container-list">
                {petVaccine.length > 0 ? petVaccine.map((item) => (
                    <VaccineItem key={item._id} {...item} />
                )) : (
                  <p>Il n'y a pas encore de vaccin enregistré.</p>
                )}
            </div>
            <div className="vaccine-container-add">
                <button
                    type="submit"
                    className="vaccine-container-add-btn"
                    onClick={() => openShowVaccine(true)}
                >
                    <svg version="1.1" id="Capa_1"x="0px" y="0px" viewBox="0 0 45.402 45.402" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
                              c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
                              c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
                              c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                      </g>
                  </svg>
                </button>
                <Modal show={showVaccine} onHide={closeShowVaccine} className="vaccine-container-add__modal">
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un vaccin</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit} className="vaccine-container-add__modal__form">
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                placeholder="Date"
                                name="vaccineDate"
                                value={petVaccine.vaccineDate}
                                onChange={handleChange}
                                max={dayjs(new Date(Date.now())).format('YYYY-MM-DD')}
                                required
                            />
                            <div className="date-error">
                                <p>{error.vaccineDate}</p>
                            </div>
                            <label htmlFor="vaccine">Vaccin</label>
                            <input
                                type="text"
                                placeholder="Nom du vaccin"
                                name="vaccineName"
                                value={petVaccine.vaccineName}
                                onChange={handleChange}
                                required
                            />
                            <div className="name-error">
                                <p>{error.vaccineName}</p>
                            </div>
                            <div className="modal__form-btns">
                                <button
                                    className="add-button-submit"
                                    variant="primary"
                                    type="submit"
                                >
                                    Valider
                                </button>
                                <button
                                    className="add-button-cancel"
                                    variant="secondary"
                                    onClick={closeShowVaccine}
                                >
                                    Annuler
                                </button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

VaccineDetails.propTypes = {
    changeField: PropTypes.func.isRequired,
    petVaccine: PropTypes.arrayOf(
        PropTypes.shape({}),
    ).isRequired,
    addVaccine: PropTypes.func.isRequired,

};


export default withRouter(VaccineDetails);
