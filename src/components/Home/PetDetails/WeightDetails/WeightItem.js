import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';
import dayjs from 'dayjs';

import './WeightDetails.scss';

const WeightItem = ({
    _id,
    weightDate,
    weightValue,
    deleteWeight,
    removeWeight
}) => {
    const history = useHistory();

    const handleDelete = (evt) => {
        evt.preventDefault();
        console.log('je supprime un item poids', _id);
        localStorage.setItem('weightToDelete', _id);
        removeWeight(_id);
        deleteWeight(_id);
        history.push();
    };

    return (
        <div className="weight-item" key={_id}>
            <div className="weight-item-content">
                <div className="weight-item-content-date">
                    <p>{dayjs(weightDate).format('DD/MM/YYYY')}
                    </p>
                </div>
                <div className="weight-item-content-value">
                    <p>{weightValue} kg
                    </p>
                </div>
            </div>
            <div className="weight-item-content-line" />
            <div className="delete">
                <button type="submit" className="delete-btn" onClick={handleDelete}>supp</button>
            </div>
        </div>
    );
};

WeightItem.propTypes = {
    deleteWeight: PropTypes.func.isRequired,
};


export default WeightItem;
