import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import dayjs from 'dayjs';

import './DewormingDetails.scss';

const DewormingDetails = ({ petDeworming }) => {
  const [showDeworming, setShowDeworming] = useState(false);

  const history = useHistory();

  const handleCloseDeworming = () => setShowDeworming(false);
  const handleShowDeworming = () => setShowDeworming(true);

  return (
    <div className="deworming-details-container">
      <button
        className="back-btn"
        type="button"
        onClick={() => history.goBack()}
      >
        Retour
      </button>
      <h2>Suivi des vermifuges</h2>
      <div className="deworming-details-list">
        {petDeworming.map((item) => (
          <>
            <div className="deworming-details-item">
              <div className="deworming-details-item-date">
                <p>{dayjs(item.dewormingDate).format('DD/MM/YYYY')}
                </p>
              </div>
              <div className="deworming-details-item-value">
                <p>{item.dewormingName}
                </p>
              </div>
            </div>
            <div className="deworming-details-item-line" />
          </>
        ))}
      </div>
      <div className="add-deworming">
        <button
          type="submit"
          className="add-deworming-btn"
          onClick={handleShowDeworming}
        >
          Ajouter
        </button>
        <Modal show={showDeworming} onHide={handleCloseDeworming} className="modal-add-deworming">
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <button type="button" variant="secondary" onClick={handleCloseDeworming}>
              Close
            </button>
            <button type="button" variant="primary" onClick={handleCloseDeworming}>
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

DewormingDetails.propTypes = {
  petDeworming: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};


export default withRouter(DewormingDetails);
