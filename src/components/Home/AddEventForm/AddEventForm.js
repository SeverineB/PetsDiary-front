import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

import './AddEventForm.scss';

const AddEventForm = ({
  title,
  start,
  end,
  address,
  changeField,
  addEvent,
  petsList
}) => {

    const history = useHistory();
    const handleChange = (evt) => {
        changeField(evt.target.name, evt.target.value);
    };

    const handleSelect = (evt) => {
        localStorage.setItem("petId", evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addEvent();
        history.push('/event');
    };

    return (
        <div className="add-event">
            <h2 className="add-event-title">Ajouter un rendez-vous</h2>
            <Form onSubmit={handleSubmit} className="add-event-form">
                <select onChange={handleSelect} name="petId">
                    {petsList.map((pet) => (
                        <option key={pet._id} value={pet._id} label={pet.name}>{pet.name}</option>
                    ))}
                 </select>
                <label htmlFor="title">Nom</label>
                    <input
                        type="text"
                        placeholder="Titre"
                        name="title"
                        value={title}
                        onChange={handleChange}
                    />
                <label htmlFor="address">Adresse</label>
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
                        name="start"
                        value={start}
                        onChange={handleChange}
                    />
                 <label htmlFor="date">Date de fin</label>
                    <input
                        type="date"
                        placeholder="Date de fin"
                        name="end"
                        value={end}
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
    title: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    address: PropTypes.string,
    changeField: PropTypes.func.isRequired,
    changeSelect: PropTypes.func.isRequired,
    addEvent: PropTypes.func.isRequired,
    clearNewEvent: PropTypes.func.isRequired,
}

export default AddEventForm
