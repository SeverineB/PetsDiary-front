import React from 'react';
import PropTypes from 'prop-types';

import './appointments.scss';

const Appointments = ({ }) => {
  return (
    <div className="appointments-container">
      <div className="appointments-list">Mes rendez-vous déjà programmés</div>
      <div className="appointments-calendar">Calendrier</div>
    </div>
  );
};

Appointments.propTypes = {
};

export default Appointments;
