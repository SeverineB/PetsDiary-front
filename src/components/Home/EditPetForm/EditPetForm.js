/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import dayjs from 'dayjs';

import './EditPetForm.scss';

const EditPetForm = ({
    id,
    name,
    age,
    sex,
    species,
    breed,
    birthdate,
    ide,
    currentPet,
    changeFile,
    changeUrl,
    changeEditField,
    updatePet,
    avatarUrl,
}) => {
    const avatarPath = `http://localhost:3000/${currentPet.avatarPath}`

    const history = useHistory()

    const newBirthdate = dayjs(birthdate).format('YYYY-MM-DD')

    const handleChange = (evt) => {
        changeEditField(evt.target.value, evt.target.name)
    }

    const handleFileChange = (evt) => {
        const avatarToUpload = evt.target.files[0]
        const newAvatarUrl = URL.createObjectURL(evt.target.files[0])
        changeFile(avatarToUpload)
        changeUrl(newAvatarUrl)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        updatePet()
        history.push(`/pet/${id}`)
    }

    return (
        <div className="edit-pet">
        <h2 className="edit-pet-title">Editer les informations</h2>
        <Form onSubmit={handleSubmit} className="edit-pet-form">
            <div className="general-infos">
            <Form.Group>
                <div className="edit-pet-form-btn">
                    <label htmlFor="inputFile" className="label-file">Modifier l'avatar</label>
                    <input type="file" name="avatar" id="inputFile" onChange={handleFileChange} />
                </div>
            </Form.Group>
            <div className="avatar-preview">
              <img src={avatarPath} alt="avatar" />
            </div>
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
             <Form.Label>Date de naissance</Form.Label>
            <Form.Control
                type="date"
                placeholder="Date de naissance"
                name="birthdate"
                defaultValue={newBirthdate}
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
            </div>
            <div className="health-infos">
           
            <Form.Label>Numéro d'identification</Form.Label>
            <Form.Control
                type="text"
                placeholder="N° identification"
                name="ide"
                defaultValue={ide}
                onChange={handleChange}
            />
            </div>
            <Form.Label>Sexe</Form.Label>
            <Form.Group>
                <Form.Check
                    inline
                    label="Femelle"
                    name="sex"
                    type="radio"
                    id="inline-radio-1"
                    value='femelle'
                    checked={sex === 'femelle'}
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="Mâle"
                    name="sex"
                    type="radio"
                    id="inline-radio-2"
                    value='mâle'
                    checked={sex === 'mâle'}
                    onChange={handleChange}
                />
            </Form.Group>
            <div className="buttons">
                <Button variant="primary" type="submit">
                    Valider
                </Button>
                <Button
                    variant="primary"
                    type="button"
                    onClick={() => history.goBack()}
                >
                    Annuler
                </Button>
            </div>
        </Form>
        </div>
    )
}

EditPetForm.propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    changeEditField: PropTypes.func.isRequired,
    changeFile: PropTypes.func.isRequired,
    changeUrl: PropTypes.func.isRequired,
    updatePet: PropTypes.func.isRequired,
    updateWeight: PropTypes.func.isRequired,
    currentPet: PropTypes.shape({
        avatarUrl: PropTypes.string.isRequired,
        name: PropTypes.string,
        age: PropTypes.string,
        species: PropTypes.string.isRequired,
        breed: PropTypes.string.isRequired,
        birthdate: PropTypes.string,
        ide: PropTypes.string,
        sex: PropTypes.string,
    }).isRequired,
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.string,
    species: PropTypes.string,
    breed: PropTypes.string,
    birthdate: PropTypes.string,
    ide: PropTypes.string,
    sex: PropTypes.string,
}

export default EditPetForm
