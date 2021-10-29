import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal, Form, Button } from 'react-bootstrap';
import dayjs from 'dayjs';

import AntifleaItem from '../../../../containers/AntifleaItem';
import backIcon from '../../../../assets/icons/left-arrow.png';

import './AntifleaDetails.scss';

const AntifleaDetails = ({
    petAntiflea,
    changeField,
    addAntiflea,
    setErrors,
    error
}) => {
    const history = useHistory();
    const [showAntiflea, openShowAntiflea] = useState(false);

    const petId = localStorage.getItem('pet_id');

    const closeShowAntiflea = () => {  
        setErrors('antifleaDate', '');
        setErrors('antifleaValue', '');
        openShowAntiflea(false);
    }

    const checkDate = (value) => {
        if (!value) {
            setErrors('antifleaDate', 'La date doit être sélectionnée')
        } else {
            setErrors('antifleaDate', '');
        }
        return true;
    }

    const checkValue = (value) => {
        if (!value) {
            setErrors('antifleaName', 'Le nom doit être renseigné')
        } else {
            setErrors('antifleaName', '');
        }
        return true;
    }

    const handleChange = (evt) => {
        evt.preventDefault();
        changeField(evt.target.value, evt.target.name);
        switch (evt.target.name) {
            case 'antifleaDate':
              checkDate(evt.target.value);
            break;
            case 'antifleaName':
              checkValue(evt.target.value);
            break;
            default:
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addAntiflea();
        openShowAntiflea(false);
    }

    return (
        <div className="antiflea-container">
            <h2 className="antiflea-container-title">Suivi de l'anti-puces</h2>
            <div className="antiflea-container-list">
                {petAntiflea.length > 0 ? petAntiflea.map((item) => (
                    <AntifleaItem key={item._id} {...item} />
                )) : (
                  <p>Il n'y a pas encore d'antipuces enregistré.</p>
                )}
            </div>
            <div className="antiflea-container-add">
                <button
                    type="submit"
                    className="antiflea-container-add-btn"
                    onClick={() => openShowAntiflea(true)}
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
                <Modal show={showAntiflea} onHide={closeShowAntiflea} className="antiflea-container-add__modal">
                    <Modal.Header closeButton>
                        <Modal.Title>Ajouter un anti-puces</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit} className="antiflea-container-add__modal__form">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Date"
                                name="antifleaDate"
                                value={petAntiflea.antifleaDate}
                                onChange={handleChange}
                                max={dayjs(new Date(Date.now())).format('YYYY-MM-DD')}
                                required
                            />
                            <div className="date-error">
                                <p>{error.antifleaDate}</p>
                            </div>
                            <Form.Label>Nom</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nom de l`anti-puces"
                                name="antifleaName"
                                value={petAntiflea.antifleaName}
                                onChange={handleChange}
                                required
                            />
                            <div className="name-error">
                                <p>{error.antifleaName}</p>
                            </div>
                            <div className="modal__form-btns">
                                <Button
                                    className="add-button-submit"
                                    variant="primary"
                                    type="submit"
                                >
                                    Valider
                                </Button>
                                <Button
                                    className="add-button-cancel"
                                    variant="secondary"
                                    onClick={closeShowAntiflea}
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

AntifleaDetails.propTypes = {
petAntiflea: PropTypes.arrayOf(
    PropTypes.shape({}),
).isRequired,
changeField: PropTypes.func.isRequired,
addAntiflea: PropTypes.func.isRequired,
};


export default withRouter(AntifleaDetails);
