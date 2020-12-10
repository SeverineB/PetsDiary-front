import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';

import './VaccineDetails.scss';

import backIcon from '../../../../assets/icons/left-arrow.png'

const VaccineDetails = ({ petVaccine }) => {
    const [showVaccine, setShowVaccine] = useState(false);
    const history = useHistory();

    const handleCloseVaccine = () => setShowVaccine(false);
    const handleShowVaccine = () => setShowVaccine(true);

    const handleDelete = () => {
        localStorage.setItem('item to delete', petVaccine.map((item) => item._id));
        console.log('je veux supprimer cet item', localStorage.getItem('item to delete'));
    };

    return (
        <div className="vaccine-container">
            <button
                className="back-btn"
                type="button"
                onClick={() => history.goBack()}
            >
                <img src={backIcon} alt="black left arrow" />
            </button>
            <h2>Suivi des vaccins</h2>
            <div className="vaccine-list">
                {petVaccine.map((item) => (
                <div className="vaccine-item" key={item._id}>
                    <div onClick={handleDelete} className="vaccine-item-content">
                        <div className="vaccine-item-content-date">
                            <p>{dayjs(item.vaccineDate).format('DD/MM/YYYY')}
                            </p>
                        </div>
                        <div className="vaccine-item-content-value">
                            <p>{item.vaccineName}
                            </p>
                        </div>
                    </div>
                    <div className="vaccine-item-content-line" />
                </div>
                ))}
            </div>
        </div>
    );
};

VaccineDetails.propTypes = {
    petVaccine: PropTypes.arrayOf(
        PropTypes.shape({}),
    ).isRequired,
};

export default VaccineDetails;
