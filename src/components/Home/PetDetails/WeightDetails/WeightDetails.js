import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal, Form, Button } from 'react-bootstrap';
import dayjs from 'dayjs';

import WeightChart from '../../../../containers/WeightChart';
import WeightItem from '../../../../containers/WeightItem';
import backIcon from '../../../../assets/icons/left-arrow.png';

import './WeightDetails.scss';

const WeightDetails = ({
    petWeight,
    changeField,
    addWeight,
    setErrors,
    error
}) => {
    const history = useHistory();
    const [showWeight, openShowWeight] = useState(false);

    const petId = localStorage.getItem('pet_id');

    const closeShowWeight = () => {  
        setErrors('weightDate', '');
        setErrors('weightValue', '');
        openShowWeight(false);
    }

    const checkDate = (value) => {
        if (!value) {
            setErrors('weightDate', 'La date doit être sélectionnée')
        } else {
            setErrors('weightDate', '');
        }
        return true;
    }

    const checkValue = (value) => {
        if (!value) {
            setErrors('weightValue', 'Le poids doit être renseigné')
        } else {
            setErrors('weightValue', '');
        }
        return true;
    }

    const handleChange = (evt) => {
        evt.preventDefault();
        changeField(evt.target.value, evt.target.name);
        switch (evt.target.name) {
            case 'weightDate':
              checkDate(evt.target.value);
              break;
            case 'weightValue':
              checkValue(evt.target.value);
              break;
            default:
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addWeight();
        openShowWeight(false);
        history.push(`/pet/${petWeight[0].pet_id}/weight`)
    }

    petWeight.map((item, index) => {
        console.log('ITEM ', item);
        console.log('INDEX', index);
    })

    return (
        <div className="weight-container">
            <button
                className="back-btn"
                type="button"
                onClick={() => history.push(`/pet/${petId}`)}
            >
                <img src={backIcon} alt="black left arrow" />
            </button>
            <div className="weight-chart">
                <WeightChart petWeight={petWeight} />
            </div>
            <div className="weight-list">
                {petWeight.map((item) => (
                    <WeightItem key={item._id} {...item} />
                ))}
            </div>
            <div className="add-weight">
                <button
                    type="submit"
                    className="add-weight-btn"
                    onClick={() => openShowWeight(true)}
                >
                Ajouter
                </button>
                <Modal show={showWeight} onHide={closeShowWeight} className="modal-add-weight">
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un item de poids</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit} className="add-weight-form">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Date"
                                name="weightDate"
                                value={petWeight.weightDate}
                                onChange={handleChange}
                                max={dayjs(new Date(Date.now())).format('YYYY-MM-DD')}
                                required
                            />
                            <div className="date-error">
                                <p>{error.weightDate}</p>
                            </div>
                            <Form.Label>Poids</Form.Label>
                            <Form.Control
                                type="number"
                                step="0.1"
                                placeholder="Poids en kg"
                                name="weightValue"
                                value={petWeight.weightValue}
                                onChange={handleChange}
                                required
                            />
                            <div className="number-error">
                                <p>{error.weightValue}</p>
                            </div>
                            <div className="add-weight-form-btn">
                                <Button
                                    className="add-weight-button-submit"
                                    variant="primary"
                                    type="submit"
                                >
                                    Valider
                                </Button>
                                <Button
                                    className="add-weight-button-cancel"
                                    variant="secondary"
                                    onClick={closeShowWeight}
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

WeightDetails.propTypes = {
    changeField: PropTypes.func.isRequired,
    petWeight: PropTypes.arrayOf(
        PropTypes.shape({}),
    ).isRequired,
    addWeight: PropTypes.func.isRequired,

};


export default withRouter(WeightDetails);
