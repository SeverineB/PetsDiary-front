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
        <button
            className="deworming-container__btn-back"
            type="button"
            onClick={() => history.push(`/pet/${petId}`)}
        >
            <img src={backIcon} alt="black left arrow" />
        </button>
        <h2 className="deworming-container-title">Suivi des vermifuges</h2>
        <div className="deworming-container-list">
            {petDeworming.map((item) => (
                <DewormingItem key={item._id} {...item} />
            ))}
        </div>
        <div className="deworming-container-add">
            <button
                type="submit"
                className="deworming-container-add__btn"
                onClick={() => openShowDeworming(true)}
            >
             <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 52 52">
                <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M38.5,28H28v11c0,1.104-0.896,2-2,2
                    s-2-0.896-2-2V28H13.5c-1.104,0-2-0.896-2-2s0.896-2,2-2H24V14c0-1.104,0.896-2,2-2s2,0.896,2,2v10h10.5c1.104,0,2,0.896,2,2
                    S39.604,28,38.5,28z"/>
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
