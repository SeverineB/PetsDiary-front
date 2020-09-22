import React from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react';

import Field from '../../../containers/AddPetForm/Field';

const AddPetForm = ({
  open,
  toggleOpen,
  name,
  age,
  species,
  breed,
  changeField,
}) => {
  const handleSubmit = () => {
    console.log('Je soumets les infos saisies');
  };

  return (
    <div className="add-pet-form">
      <Modal
        closeIcon
        open={open}
        trigger={<Button className="add-pet-button"><Icon name="plus" /></Button>}
        onClose={toggleOpen}
        onOpen={toggleOpen}
      >
        <Header content="Ajouter votre nouvel animal" />
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            <Field
              name="name"
              placeholder="Nom de votre animal"
              onChange={changeField}
              value={name}
            />
            <Field
              name="age"
              placeholder="Age de votre animal"
              onChange={changeField}
              value={age}
            />
            <Field
              name="species"
              placeholder="Espèce de votre animal"
              onChange={changeField}
              value={species}
            />
            <Field
              name="breed"
              placeholder="Race de votre animal"
              onChange={changeField}
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
  age: PropTypes.number.isRequired,
  species: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
};

export default AddPetForm;
