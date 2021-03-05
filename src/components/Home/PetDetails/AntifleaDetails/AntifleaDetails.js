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
        history.push(`/pet/${petId}/antiflea`)
    }

    return (
        <div className="antiflea-container">
            <button
                className="antiflea-container__btn-back"
                type="button"
                onClick={() => history.push(`/pet/${petId}`)}
            >
                <img src={backIcon} alt="black left arrow" />
            </button>
            <h2 className="antiflea-container-title">Suivi de l'anti-puces</h2>
            <div className="antiflea-container-list">
                {petAntiflea.map((item) => (
                <AntifleaItem key={item._id} {...item} />
                ))}
            </div>
            <div className="antiflea-container-add">
                <button
                    type="submit"
                    className="antiflea-container-add__btn"
                    onClick={() => openShowAntiflea(true)}
                >
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 52 52">
                        <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M38.5,28H28v11c0,1.104-0.896,2-2,2
                            s-2-0.896-2-2V28H13.5c-1.104,0-2-0.896-2-2s0.896-2,2-2H24V14c0-1.104,0.896-2,2-2s2,0.896,2,2v10h10.5c1.104,0,2,0.896,2,2
                            S39.604,28,38.5,28z"/>
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
