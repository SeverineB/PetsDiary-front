import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import dayjs from 'dayjs';

import WeightChart from '../WeightDetails/WeightChart/WeightChart';
import WeightItem from '../../../../containers/WeightItem';
import backIcon from '../../../../assets/icons/left-arrow.png';

import './WeightDetails.scss';

const WeightDetails = ({
    pet,
    changeField,
    addWeight,
    setErrors,
    error
}) => {
 
    const petWeight = pet.weight;
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
    }

    return (
        <div className="weight-container">
            <div className="weight-chart">
                <WeightChart petWeight={petWeight} />

            </div>
            <div className="add-weight">
                <button
                    type="submit"
                    className="add-weight-btn"
                    title="Ajouter un item de poids ?"
                    onClick={() => openShowWeight(true)}
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
            <div className="weight-list">
                {petWeight.map((item) => (
                    <WeightItem key={item._id} {...item} pet={pet}/>
                ))}
            </div>
        </div>
    );
};

WeightDetails.propTypes = {
    changeField: PropTypes.func.isRequired,
    addWeight: PropTypes.func.isRequired,

};


export default withRouter(WeightDetails);
