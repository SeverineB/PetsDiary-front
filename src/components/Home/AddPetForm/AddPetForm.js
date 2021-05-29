import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import './AddPetForm.scss';

const AddPetForm = ({
  name,
  age,
  species,
  breed,
  sex,
  birthdate,
  ide,
  avatarUrl,
  changeField,
  changeFile,
  changeUrl,
  addPet,
}) => {

    const history = useHistory();
    const handleChange = (evt) => {
        changeField(evt.target.name, evt.target.value)
    };

    const handleFileChange = (evt) => {
        const avatarToUpload = evt.target.files[0]
        const newAvatarUrl = URL.createObjectURL(evt.target.files[0])
        changeFile(avatarToUpload)
        changeUrl(newAvatarUrl)
    };

    const handleSubmit = (evt) => {
        evt.preventDefault()
        addPet()
        history.push('/pet')
    };

    return (
        <div className="add-pet">
            <h2 className="add-pet-title">Ajouter un animal</h2>
            <Form onSubmit={handleSubmit} className="add-pet-form">
                <label htmlFor="name">Nom</label>
                    <input
                        type="text"
                        placeholder="Nom"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />

                <label htmlFor="age">Age</label>
                    <input
                        type="text"
                        placeholder="Age"
                        name="age"
                        value={age}
                        onChange={handleChange}
                    />
                <label htmlFor="date">Date de naissance</label>
                    <input
                        type="date"
                        placeholder="Date de naissance"
                        name="birthdate"
                        value={birthdate}
                        onChange={handleChange}
                    />
                <label htmlFor="species">Espèce</label>
                    <input
                        type="text"
                        placeholder="Espèce"
                        name="species"
                        value={species}
                        onChange={handleChange}
                    />
                <label htmlFor="breed">Race</label>
                    <input
                        type="text"
                        placeholder="Race"
                        name="breed"
                        value={breed}
                        onChange={handleChange}
                    />
                <label htmlFor="ide">Numéro d'identification</label>
                    <input
                        type="text"
                        placeholder="Numéro d'identification à 15 chiffres"
                        name="ide"
                        value={ide}
                        onChange={handleChange}
                    />
                <label htmlFor="sex">Sexe</label>
                {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="Femelle"
                        type={type}
                        name="sex"
                        value="femelle"
                        id={`inline-${type}-1`}
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="Mâle"
                        type={type}
                        name="sex"
                        value="mâle"
                        id={`inline-${type}-2`}
                        onChange={handleChange}
                    />
                </div>
                ))}
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

AddPetForm.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    breed: PropTypes.string,
    sex: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    ide: PropTypes.string,
    avatarUrl: PropTypes.string.isRequired,
    changeField: PropTypes.func.isRequired,
    changeFile: PropTypes.func.isRequired,
    changeUrl: PropTypes.func.isRequired,
    addPet: PropTypes.func.isRequired,
    clearNewPet: PropTypes.func.isRequired,
}

AddPetForm.defaultProps = {
    breed: '',
    ide: 2,
}

export default AddPetForm
