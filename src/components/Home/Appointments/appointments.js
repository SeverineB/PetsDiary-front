import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Appointments = ({ eventsList, getEventsList }) => {

    useEffect(() => {
        getEventsList();
    }, []);

    return (
      <div>
        {eventsList.map((event) => (
                <div class="events-item" key={event._id}>
                    <p>{event.name}</p>
                    <p>{dayjs(event.startDate).format('DD/MM/YYYY')}</p>
                    <p>{dayjs(event.endDate).format('DD/MM/YYYY')}</p>
                    <p>{event.address}</p>
                </div>
            ))}
            <Link to="/event/add">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 457.47 457.469">
                        <g>
                            <path d="M228.734,0C102.41,0,0,102.41,0,228.735C0,355.06,102.41,457.469,228.734,457.469
                                c126.325,0,228.735-102.409,228.735-228.734C457.47,102.41,355.06,0,228.734,0z M359.268,265.476h-97.326v97.315
                                c0,16.668-13.506,30.186-30.181,30.186c-16.668,0-30.189-13.518-30.189-30.186v-97.315h-97.309
                                c-16.674,0-30.192-13.512-30.192-30.187c0-16.674,13.518-30.188,30.192-30.188h97.315v-97.31c0-16.674,13.515-30.183,30.189-30.183
                                c16.675,0,30.187,13.509,30.187,30.183v97.315h97.314c16.669,0,30.192,13.515,30.192,30.188
                                C389.46,251.97,375.937,265.476,359.268,265.476z"/>
                        </g>
                    </svg>
                </Link>
      </div>
    );
};

Appointments.propTypes = {
    getEventsList: PropTypes.func.isRequired,
    eventsList: PropTypes.arrayOf(
        PropTypes.shape({
        _id: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default Appointments;
