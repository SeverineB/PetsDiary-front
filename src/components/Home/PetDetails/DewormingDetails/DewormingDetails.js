import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal, Form } from 'react-bootstrap';
import dayjs from 'dayjs';

import DewormingItem from '../../../../containers/DewormingItem';
import backIcon from '../../../../assets/icons/left-arrow.png';

import './DewormingDetails.scss';

const DewormingDetails = ({
    petDeworming,
    changeField, 
    error,
    addDeworming,
    setErrors
}) => {
    const history = useHistory();
    const [showDeworming, openShowDeworming] = useState(false)

    const petId = localStorage.getItem('pet_id')

    const closeShowDeworming = () => {  
        setErrors('dewormingDate', '')
        setErrors('dewormingName', '')
        openShowDeworming(false)
    }

    const checkDate = (value) => {
        if (!value) {
            setErrors('dewormingDate', 'La date doit être sélectionnée')
        } else {
            setErrors('dewormingDate', '')
        }
        return true
    }

    const checkValue = (value) => {
        if (!value) {
            setErrors('dewormingName', 'Le nom doit être renseigné')
        } else {
            setErrors('dewormingName', '')
        }
        return true
    }

    const handleChange = (evt) => {
        evt.preventDefault()
        changeField(evt.target.value, evt.target.name)
        switch (evt.target.name) {
            case 'dewormingDate':
              checkDate(evt.target.value)
              break;
            case 'dewormingName':
              checkValue(evt.target.value)
              break
            default:
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        addDeworming()
        openShowDeworming(false)
    }

    return (
        <div className="deworming-container">
        <h2 className="deworming-container-title">Suivi des vermifuges</h2>
        <div className="deworming-container-list">
            {petDeworming.length > 0 ? petDeworming.map((item) => (
                <DewormingItem key={item._id} {...item} />
            )) : (
              <p>Il n'y a pas encore de vermifuge enregistré.</p>
            )}
        </div>
        <div className="deworming-container-add">
            <button
                type="submit"
                className="deworming-container-add__btn"
                onClick={() => openShowDeworming(true)}
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
            <Modal show={showDeworming} onHide={closeShowDeworming} className="deworming-container-add__modal">
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un vermifuge</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit} className="deworming-container-add__modal__form">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Date"
                                name="dewormingDate"
                                value={petDeworming.dewormingDate}
                                onChange={handleChange}
                                max={dayjs(new Date(Date.now())).format('YYYY-MM-DD')}
                                required
                            />
                            <div className="date-error">
                                <p>{error.dewormingDate}</p>
                            </div>
                            <Form.Label>Nom</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nom du vermifuge"
                                name="dewormingName"
                                value={petDeworming.dewormingName}
                                onChange={handleChange}
                                required
                            />
                            <div className="name-error">
                                <p>{error.dewormingName}</p>
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
                                    onClick={closeShowDeworming}
                                >
                                    Annuler
                                </button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
        </div>
        </div>
    );
};

DewormingDetails.propTypes = {
    petDeworming: PropTypes.arrayOf(
        PropTypes.shape({}),
    ).isRequired,
    addDeworming: PropTypes.func.isRequired,
    changeField: PropTypes.func.isRequired,
    setErrors: PropTypes.func.isRequired,
};


export default withRouter(DewormingDetails);
