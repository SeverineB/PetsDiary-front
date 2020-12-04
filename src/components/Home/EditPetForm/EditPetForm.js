/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import dayjs from 'dayjs';

import './EditPetForm.scss';

const EditPetForm = ({
  currentPet,
  changeFile,
  changeUrl,
  changeEditField,
  updatePet,
  updatePetDetails,
  avatarUrl,
}) => {
  const params = useParams();
  const history = useHistory();

  const {
    name,
    age,
    species,
    breed,
    ide,
    sex,
    birthdate,
    weight,
    vaccine,
    deworming,
    antiflea
  } = currentPet;

  console.log('CURRENT PET IN EDIT FORM', currentPet);
  console.log('CURRENT WEIGHT IN EDIT FORM', weight);
  weight.map((info, index) => {
   /*  console.log(index[info.weightValue]); */
    console.log('INDEX ', index, 'INFO ', info);
    console.log('INFO ', Object.keys(info)[2]);
  });

  const newBirthdate = dayjs(birthdate).format('YYYY-MM-DD');
  console.log('NEW BIRTHDATE', newBirthdate);

  const handleChange = (evt) => {
    changeEditField(evt.target.value, evt.target.name);
  };

  const handleFileChange = (evt) => {
    const avatarToUpload = evt.target.files[0];
    const newAvatarUrl = URL.createObjectURL(evt.target.files[0]);
    changeFile(avatarToUpload);
    changeUrl(newAvatarUrl);
    console.log('NEW AVATAR', newAvatarUrl);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('je soumets le formulaire');
    updatePet();
    history.push('/home');
  };

  return (
    <div className="edit-pet">
      <h2>Editer les informations</h2>
      <Form onSubmit={handleSubmit} className="edit-pet-form">
        <div className="general-infos">
          <h3>Informations générales</h3>
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nom"
            name="name"
            defaultValue={name}
            onChange={handleChange}
          />
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="Age"
            name="age"
            defaultValue={age}
            onChange={handleChange}
          />
          <Form.Label>Espèce</Form.Label>
          <Form.Control
            type="text"
            placeholder="Espèce"
            name="species"
            defaultValue={species}
            onChange={handleChange}
          />
          <Form.Label>Race</Form.Label>
          <Form.Control
            type="text"
            placeholder="Race"
            name="breed"
            defaultValue={breed}
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
            {!avatarUrl ? <img src={currentPet.avatarUrl} alt="avatar" /> : <img src={avatarUrl} alt="avatar" />}
          </div>
        </div>
        <div className="health-infos">
          <Form.Label>Date de naissance</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date de naissance"
            name="birthdate"
            defaultValue={newBirthdate}
            onChange={handleChange}
          />
          <Form.Label>Numéro d'identification</Form.Label>
          <Form.Control
            type="number"
            placeholder="N° identification"
            name="ide"
            defaultValue={ide}
            onChange={handleChange}
          />
          <h3>Mesures</h3>
          <Form.Label>Poids</Form.Label>
          {weight.map((item) => (
            <div className="health-infos-weight" key={item._id}>
              <Form.Control
                type="date"
                placeholder="Date"
                name="weightDate"
                defaultValue={dayjs(item.weightDate).format('YYYY-MM-DD')}
                onChange={handleChange}
              />
              <Form.Control
                type="number"
                placeholder="Poids"
                name={Object.keys(item)[2]}
                defaultValue={item.weightValue}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        <Button variant="primary" type="submit">
          Valider
        </Button>
      </Form>
    </div>
  );
};

EditPetForm.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  changeEditField: PropTypes.func.isRequired,
  changeEditArrayField: PropTypes.func.isRequired,
  changeFile: PropTypes.func.isRequired,
  changeUrl: PropTypes.func.isRequired,
  updatePet: PropTypes.func.isRequired,
  updatePetDetails: PropTypes.func.isRequired,
  currentPet: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string,
    age: PropTypes.string,
    species: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    birthdate: PropTypes.string,
    ide: PropTypes.number,
    sex: PropTypes.string,
    weight: PropTypes.arrayOf(
      PropTypes.shape({
        weightDate: PropTypes.string.isRequired,
        weightValue: PropTypes.number.isRequired,
      }),
    ),
    vaccine: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
    deworming: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
    antiflea: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
  petDetails: PropTypes.shape({
    birthdate: PropTypes.string,
    ide: PropTypes.number,
    sex: PropTypes.string,
    weight: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      }),
    ),
    vaccine: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
    deworming: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
    antiflea: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,

};

export default EditPetForm;
