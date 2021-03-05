import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
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

    const sortByDate = array => {
        const sorter = (a, b) => {
           return new Date(a.weightDate) - new Date(b.weightDate);
        };
        array.sort(sorter);
     };
    const newPetWeight = sortByDate(petWeight);

    console.log('PET WEIGHT IN DETAILS', petWeight)

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
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 52 52">
                        <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M38.5,28H28v11c0,1.104-0.896,2-2,2
                            s-2-0.896-2-2V28H13.5c-1.104,0-2-0.896-2-2s0.896-2,2-2H24V14c0-1.104,0.896-2,2-2s2,0.896,2,2v10h10.5c1.104,0,2,0.896,2,2
                            S39.604,28,38.5,28z"/>
                    </svg>
                </button>
                <Modal show={showWeight} onHide={closeShowWeight} className="modal-add-weight">
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un item de poids</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit} className="add-weight-form">
                            <label htmlFor="date">Date</label>
                            <input
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
                            <label htmlFor="weight">Poids</label>
                            <input
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
                                <button
                                    className="add-weight-button-submit"
                                    variant="primary"
                                    type="submit"
                                >
                                    Valider
                                </button>
                                <button
                                    className="add-weight-button-cancel"
                                    variant="secondary"
                                    onClick={closeShowWeight}
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

WeightDetails.propTypes = {
    changeField: PropTypes.func.isRequired,
    petWeight: PropTypes.arrayOf(
        PropTypes.shape({}),
    ).isRequired,
    addWeight: PropTypes.func.isRequired,

};


export default withRouter(WeightDetails);
