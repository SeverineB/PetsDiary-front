import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal, Form, Button } from 'react-bootstrap';
import dayjs from 'dayjs';

import WeightChart from '../../../../containers/WeightChart';
import WeightItem from '../../../../containers/WeightItem';

import './WeightDetails.scss';

const WeightDetails = ({ petWeight, deleteWeight }) => {
    const [showWeight, setShowWeight] = useState(false);
    const history = useHistory();

    const handleCloseWeight = () => setShowWeight(false);
    const handleShowWeight = () => setShowWeight(true);

    const handleChange = (evt) => {
        console.log('EVT TARGET VALUE', evt.target.value);
        console.log('EVT TARGET NAME', evt.target.name);
        change
    }

    const handleSubmit = () => {
        console.log('je soumets le form d\'ajout de poids');
    }

    petWeight.map((item, index) => {
        console.log('ITEM ', item);
        console.log('INDEX', index);
    })

    return (
        <div className="weight-container">
        <button
            className="back-btn"
            type="submit"
            onClick={() => history.push(`/pet/${petWeight[0].pet_id}`)}
        >
            Retour
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
            onClick={handleShowWeight}
            >
            Ajouter
            </button>
            <Modal show={showWeight} onHide={handleShowWeight} className="modal-add-weight">
            <Modal.Header closeButton>
                <Modal.Title>Ajouter un item de poids</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} className="login-form">
                    {petWeight.map((item, index) => (
                        <>
                        <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Date"
                                name={""+index}
                                value={item.weightDate}
                                onChange={handleChange}
                            />

                        {/* <Form.Label>Mot de passe</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Poids"
                            name="weight"
                        
                            onChange={handleChange}
                        /> */}
                    </>
                    ))}
                    

                    <div className="login-form-btn">
                        <Button
                            className="login-button-submit"
                            variant="primary"
                            type="submit"
                        >
                            Valider
                        </Button>
                        <Button
                            className="login-button-cancel"
                            variant="secondary"
                            onClick={() => {setShowLogin(false)}}
                        >
                            Annuler
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" variant="secondary" onClick={handleCloseWeight}>
                Close
                </button>
                <button type="button" variant="primary" onClick={handleCloseWeight}>
                Save Changes
                </button>
            </Modal.Footer>
            </Modal>
        </div>
        </div>
    );
};

WeightDetails.propTypes = {
    petWeight: PropTypes.arrayOf(
        PropTypes.shape({}),
    ).isRequired,
};


export default withRouter(WeightDetails);
