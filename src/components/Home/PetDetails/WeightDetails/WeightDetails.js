import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import dayjs from 'dayjs';

import WeightChart from '../../../../containers/WeightChart';
import WeightItem from '../../../../containers/WeightItem';

import './WeightDetails.scss';

const WeightDetails = ({ petWeight, deleteWeight }) => {
    const [showWeight, setShowWeight] = useState(false);
    const history = useHistory();

    const handleCloseWeight = () => setShowWeight(false);
    const handleShowWeight = () => setShowWeight(true);

    return (
        <div className="weight-container">
        <button
            className="back-btn"
            type="submit"
            onClick={() => history.goBack()}
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
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
