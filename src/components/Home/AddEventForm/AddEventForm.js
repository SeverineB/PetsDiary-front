import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import './AddEventForm.scss';

const AddEventForm = ({
  name,
  startDate,
  endDate,
  address,
  changeField,
  addEvent,
  petsList
}) => {

    const history = useHistory();
    const handleChange = (evt) => {
        changeField(evt.target.name, evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addEvent();
        history.push('/home');
    };

    return (
        <div className="add-event">
            <h2 className="add-event-title">Ajouter un rendez-vous</h2>
            <Form onSubmit={handleSubmit} className="add-event-form">
                <select>
                    {petsList.map((pet) => (
                        <option value={pet._id}>{pet.name}</option>
                    ))}
                 </select>
                <label htmlFor="name">Nom</label>
                    <input
                        type="text"
                        placeholder="Nom"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                <label htmlFor="name">Adresse</label>
                    <input
                        type="text"
                        placeholder="Adresse"
                        name="address"
                        value={address}
                        onChange={handleChange}
                    />
                <label htmlFor="date">Date de début</label>
                    <input
                        type="date"
                        placeholder="Date de début"
                        name="startDate"
                        value={startDate}
                        onChange={handleChange}
                    />
                 <label htmlFor="date">Date de fin</label>
                    <input
                        type="date"
                        placeholder="Date de fin"
                        name="endDate"
                        value={endDate}
                        onChange={handleChange}
                    />
                <div className="buttons">
                    <button className="add-validate-btn" variant="primary" type="submit">
                        Valider
                    </button>
                    <button className="add-cancel-btn"variant="primary" type="submit">
                        <Link to="/home">Annuler</Link>
                    </button>
                </div>
            </Form>
            </div>
        );
    };

AddEventForm.propTypes = {
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    address: PropTypes.string,
    changeField: PropTypes.func.isRequired,
    addEvent: PropTypes.func.isRequired,
    clearNewEvent: PropTypes.func.isRequired,
};

export default AddEventForm;
