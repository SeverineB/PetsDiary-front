import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal, Form, Button  } from 'react-bootstrap';
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
    const [showDeworming, openShowDeworming] = useState(false);

    const petId = localStorage.getItem('pet_id');

    const closeShowDeworming = () => {  
        setErrors('dewormingDate', '');
        setErrors('dewormingName', '');
        openShowDeworming(false);
    }

    const checkDate = (value) => {
        if (!value) {
            setErrors('dewormingDate', 'La date doit être sélectionnée')
        } else {
            setErrors('dewormingDate', '');
        }
        return true;
    }

    const checkValue = (value) => {
        if (!value) {
            setErrors('dewormingName', 'Le nom doit être renseigné')
        } else {
            setErrors('dewormingName', '');
        }
        return true;
    }

    const handleChange = (evt) => {
        evt.preventDefault();
        changeField(evt.target.value, evt.target.name);
        switch (evt.target.name) {
            case 'dewormingDate':
              checkDate(evt.target.value);
              break;
            case 'dewormingName':
              checkValue(evt.target.value);
              break;
            default:
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addDeworming();
        openShowDeworming(false);
        history.push(`/pet/${petId}/deworming`)
    }

    return (
        <div className="deworming-container">
        <button
            className="back-btn"
            type="button"
            onClick={() => history.push(`/pet/${petId}`)}
        >
            <img src={backIcon} alt="black left arrow" />
        </button>
        <h2 className="deworming-container-title">Suivi des vermifuges</h2>
        <div className="deworming-list">
            {petDeworming.map((item) => (
                <DewormingItem key={item._id} {...item} />
            ))}
        </div>
        <div className="add-deworming">
            <button
                type="submit"
                className="add-deworming-btn"
                onClick={() => openShowDeworming(true)}
            >
            Ajouter
            </button>
            <Modal show={showDeworming} onHide={closeShowDeworming} className="modal-add-deworming">
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un vermifuge</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit} className="add-deworming-form">
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
                            <div className="add-deworming-form-btn">
                                <Button
                                    className="add-deworming-button-submit"
                                    variant="primary"
                                    type="submit"
                                >
                                    Valider
                                </Button>
                                <Button
                                    className="add-deworming-button-cancel"
                                    variant="secondary"
                                    onClick={closeShowDeworming}
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

DewormingDetails.propTypes = {
    petDeworming: PropTypes.arrayOf(
        PropTypes.shape({}),
    ).isRequired,
    addDeworming: PropTypes.func.isRequired,
    changeField: PropTypes.func.isRequired,
    setErrors: PropTypes.func.isRequired,
};


export default withRouter(DewormingDetails);
