import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { useHistory } from 'react-router-dom';
import { Modal, Form, Button } from 'react-bootstrap';

import VaccineItem from '../../../../containers/VaccineItem';
import backIcon from '../../../../assets/icons/left-arrow.png';

import './VaccineDetails.scss';

const VaccineDetails = ({
    petVaccine,
    changeField,
    addVaccine,
    setErrors
}) => {
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
        history.push(`/pet/${petId}/vaccine`)
    }

    return (
        <div className="vaccine-container">
            <button
                className="back-btn"
                type="button"
                onClick={() => history.push(`/pet/${petId}`)}
            >
                <img src={backIcon} alt="black left arrow" />
            </button>
            <h2>Suivi des vaccins</h2>
            <div className="vaccine-list">
                {petVaccine.map((item) => (
                    <VaccineItem key={item._id} {...item} />
                ))}
            </div>
            <div className="add-vaccine">
                <button
                type="submit"
                className="add-vaccine-btn"
                onClick={() => openShowVaccine(true)}
                >
                Ajouter
                </button>
                <Modal show={showVaccine} onHide={closeShowVaccine} className="modal-add-vaccine">
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un vaccin</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit} className="add-vaccine-form">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
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
                            <Form.Label>Nom</Form.Label>
                            <Form.Control
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
                            <div className="add-vaccine-form-btn">
                                <Button
                                    className="add-vaccine-button-submit"
                                    variant="primary"
                                    type="submit"
                                >
                                    Valider
                                </Button>
                                <Button
                                    className="add-vaccine-button-cancel"
                                    variant="secondary"
                                    onClick={closeShowVaccine}
                                >
                                    Annuler
                                </Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

VaccineDetails.propTypes = {
    petVaccine: PropTypes.arrayOf(
        PropTypes.shape({}),
    ).isRequired,
    addVaccine: PropTypes.func.isRequired,
    changeField: PropTypes.func.isRequired,
    setErrors: PropTypes.func.isRequired,
};

export default VaccineDetails;
