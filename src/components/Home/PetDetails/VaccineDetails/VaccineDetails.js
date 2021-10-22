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
        /* history.push(`/pet/${petId}/vaccine`) */
    }

    return (
        <div className="vaccine-container">
            <button
                className="vaccine-container__btn-back"
                type="button"
                onClick={() => history.push(`/pet/${petId}`)}
            >
                <img src={backIcon} alt="black left arrow" />
            </button>
            <div className="vaccine-container-list">
                {petVaccine ? petVaccine.map((item) => (
                    <VaccineItem key={item._id} {...item} />
                )) : ''}
            </div>
            <div className="vaccine-container-add">
                <button
                    type="submit"
                    className="vaccine-container-add__btn"
                    onClick={() => openShowVaccine(true)}
                >
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 52 52">
                        <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M38.5,28H28v11c0,1.104-0.896,2-2,2
                            s-2-0.896-2-2V28H13.5c-1.104,0-2-0.896-2-2s0.896-2,2-2H24V14c0-1.104,0.896-2,2-2s2,0.896,2,2v10h10.5c1.104,0,2,0.896,2,2
                            S39.604,28,38.5,28z"/>
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
