import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

import './EditPetForm.scss';

const EditPetForm = ({
  pet,
  currentPet,
/*   name,
  age,
  species,
  breed, */
  changeField,
  updatePet,
}) => {
  const params = useParams();

  console.log('CURRENT PET IN EDIT FORM', currentPet);

  const handleChange = (evt) => {
    console.log(evt.target.value);
    changeField(evt.target.value, evt.target.name);
  };

  const handleSubmit = () => {
    console.log('je soumets le formulaire');
    updatePet();
  };

  return (
    <div className="edit-pet">
      <h2>Editer les informations</h2>
      <Form onSubmit={handleSubmit} className="edit-pet-form">
        <Form.Label>Nom</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nom"
          name="name"
          value={currentPet.name}
          onChange={handleChange}
        />

        <Form.Label>Age</Form.Label>
        <Form.Control
          type="text"
          placeholder="Age"
          name="age"
          value={currentPet.age}
          onChange={handleChange}
        />
        <Form.Label>Espèce</Form.Label>
        <Form.Control
          type="text"
          placeholder="Espèce"
          name="species"
          value={currentPet.species}
          onChange={handleChange}
        />
        <Form.Label>Race</Form.Label>
        <Form.Control
          type="text"
          placeholder="Race"
          name="breed"
          value={currentPet.breed}
          onChange={handleChange}
        />
        <Form.Group>
          <Form.File
            id="avatar"
            name="avatar"
            label="Ajouter un avatar"
           /*  onChange={handleFileChange} */
          />
        </Form.Group>
      </Form>
    </div>
  );
};

EditPetForm.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  currentPet: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string,
    age: PropTypes.string,
    species: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    pet_details: PropTypes.arrayOf(
      PropTypes.shape({
        birthdate: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
  updatePet: PropTypes.func.isRequired,
  /* avatarUrl: PropTypes.string.isRequired,
  changeFile: PropTypes.func.isRequired,
  changeUrl: PropTypes.func.isRequired,
  addPets: PropTypes.func.isRequired,
  clearNewPet: PropTypes.func.isRequired, */
};

export default EditPetForm;
