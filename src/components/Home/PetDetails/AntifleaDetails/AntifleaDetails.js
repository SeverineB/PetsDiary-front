import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import dayjs from 'dayjs';

import './AntifleaDetails.scss';

const AntifleaDetails = ({ petAntiflea }) => {
  const [showAntiflea, setShowAntiflea] = useState(false);

  const history = useHistory();

  const handleCloseAntiflea = () => setShowAntiflea(false);
  const handleShowAntiflea = () => setShowAntiflea(true);

  return (
    <div className="antiflea-details-container">
      <button
        className="back-btn"
        type="button"
        onClick={() => history.goBack()}
      >
        Retour
      </button>
      <h2>Suivi de l'anti-puces</h2>
      <div className="antiflea-details-list">
        {petAntiflea.map((item) => (
          <>
            <div className="antiflea-details-item">
              <div className="antiflea-details-item-date">
                <p>{dayjs(item.antifleaDate).format('DD/MM/YYYY')}
                </p>
              </div>
              <div className="antiflea-details-item-value">
                <p>{item.antifleaName}
                </p>
              </div>
            </div>
            <div className="antiflea-details-item-line" />
          </>
        ))}
      </div>
      <div className="add-antiflea">
        <button
          type="submit"
          className="add-antiflea-btn"
          onClick={handleShowAntiflea}
        >
          Ajouter
        </button>
        <Modal show={showAntiflea} onHide={handleCloseAntiflea} className="modal-add-antiflea">
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <button type="button" variant="secondary" onClick={handleCloseAntiflea}>
              Close
            </button>
            <button type="button" variant="primary" onClick={handleCloseAntiflea}>
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

AntifleaDetails.propTypes = {
  petAntiflea: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};


export default withRouter(AntifleaDetails);
