import { connect } from 'react-redux';

import AddPetForm from '../../components/Home/AddPetForm';
import {
  openModal,
  changeField,
  addPets,
  clearNewPet,
} from '../../actions/pets';

const mapStateToProps = (state) => {
  return ({
    open: state.pets.open,
    name: state.pets.name,
    age: state.pets.age,
    species: state.pets.species,
    breed: state.pets.breed,
  });
};

const mapDispatchToProps = (dispatch) => ({
  openModal: () => {
    const action = openModal();
    dispatch(action);
  },
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  addPets: () => {
    dispatch(addPets());
  },
  clearNewPet: () => {
    dispatch(clearNewPet());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPetForm);
