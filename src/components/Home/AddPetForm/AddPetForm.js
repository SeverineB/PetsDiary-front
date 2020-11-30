import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import './AddPetForm.scss';

const AddPetForm = ({
  name,
  age,
  species,
  breed,
  avatarUrl,
  changeField,
  changeFile,
  changeUrl,
  addPets,
  clearNewPet,
}) => {
  const history = useHistory();
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleFileChange = (evt) => {
    const avatarToUpload = evt.target.files[0];
    const newAvatarUrl = URL.createObjectURL(evt.target.files[0]);
    changeFile(avatarToUpload);
    changeUrl(newAvatarUrl);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addPets();
    clearNewPet();
    history.push('/home');
  };

  return (
    <div className="add-pet">
      <h2 className="add-pet-title">Ajouter un animal</h2>
      <Form onSubmit={handleSubmit} className="add-pet-form">
        <Form.Label>Nom</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nom"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <Form.Label>Age</Form.Label>
        <Form.Control
          type="text"
          placeholder="Age"
          name="age"
          value={age}
          onChange={handleChange}
        />
        <Form.Label>Espèce</Form.Label>
        <Form.Control
          type="text"
          placeholder="Espèce"
          name="species"
          value={species}
          onChange={handleChange}
        />
        <Form.Label>Race</Form.Label>
        <Form.Control
          type="text"
          placeholder="Race"
          name="breed"
          value={breed}
          onChange={handleChange}
        />
        <Form.Group>
          <Form.File
            id="avatar"
            name="avatar"
            label="Ajouter un avatar"
            onChange={handleFileChange}
          />
        </Form.Group>
        <div className="avatar-preview">
          {avatarUrl && <img src={avatarUrl} alt="avatar" />}
        </div>
        <div className="buttons">
          <Button variant="primary" type="submit">
            Valider
          </Button>
          <Button variant="primary" type="submit">
            <Link to="/home">Annuler</Link>
          </Button>
        </div>
      </Form>
    </div>
  );
};

AddPetForm.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  changeFile: PropTypes.func.isRequired,
  changeUrl: PropTypes.func.isRequired,
  addPets: PropTypes.func.isRequired,
  clearNewPet: PropTypes.func.isRequired,
};

export default AddPetForm;
