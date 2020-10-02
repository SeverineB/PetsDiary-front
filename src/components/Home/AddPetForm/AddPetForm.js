import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Header,
  Icon,
  Modal,
  Form,
} from 'semantic-ui-react';

const AddPetForm = ({
  open,
  openModal,
  name,
  age,
  species,
  breed,
  changeField,
  addPets,
  clearNewPet,
}) => {
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addPets();
    clearNewPet();
  };

  return (
    <div className="add-pet-form">
      <Modal
        closeIcon
        open={open}
        trigger={<Button className="add-pet-button"><Icon name="plus" /></Button>}
        onClose={openModal}
        onOpen={openModal}
      >
        <Header content="Ajouter votre nouvel animal" />
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              name="name"
              placeholder="Nom de votre animal"
              onChange={handleChange}
              value={name}
            />
            <Form.Input
              name="age"
              placeholder="Age de votre animal"
              onChange={handleChange}
              value={age}
            />
            <Form.Input
              name="species"
              placeholder="Espèce de votre animal"
              onChange={handleChange}
              value={species}
            />
            <Form.Input
              name="breed"
              placeholder="Race de votre animal"
              onChange={handleChange}
              value={breed}
            />
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  );
};

AddPetForm.propTypes = {
  open: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  addPets: PropTypes.func.isRequired,
  clearNewPet: PropTypes.func.isRequired,
};

export default AddPetForm;
