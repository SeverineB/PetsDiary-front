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
        history.push(`/pet/${petId}/weight`)
    }

    return (
        <div className="antiflea-details-container">
            <button
                className="back-btn"
                type="button"
                onClick={() => history.push(`/pet/${petId}`)}
            >
                <img src={backIcon} alt="black left arrow" />
            </button>
            <h2>Suivi de l'anti-puces</h2>
            <div className="antiflea-details-list">
                {petAntiflea.map((item) => (
                <AntifleaItem key={item._id} {...item} />
                ))}
            </div>
            <div className="add-antiflea">
                <button
                    type="submit"
                    className="add-antiflea-btn"
                    onClick={() => openShowAntiflea(true)}
                >
                    Ajouter
                </button>
                <Modal show={showAntiflea} onHide={closeShowAntiflea} className="modal-add-antiflea">
                    <Modal.Header closeButton>
                        <Modal.Title>Ajouter un anti-puces</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit} className="add-antiflea-form">
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
                                name="vaccineName"
                                value={petAntiflea.antifleaName}
                                onChange={handleChange}
                                required
                            />
                            <div className="name-error">
                                <p>{error.antifleaName}</p>
                            </div>
                            <div className="add-antiflea-form-btn">
                                <Button
                                    className="add-antiflea-button-submit"
                                    variant="primary"
                                    type="submit"
                                >
                                    Valider
                                </Button>
                                <Button
                                    className="add-antiflea-button-cancel"
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
