import { connect } from 'react-redux';

import EditPetForm from '../../components/Home/EditPetForm/EditPetForm';
import {
  openModal,
  changeField,
  changeFile,
  changeUrl,
  addPets,
  updatePet,
  clearNewPet,
} from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    pet: state.pets.petsList.find((pet) => pet._id === ownProps.match.params.petId),
    currentPet: state.pets.currentPet,
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
  changeFile: (avatar) => {
    dispatch(changeFile(avatar));
  },
  changeUrl: (avatarUrl) => {
    dispatch(changeUrl(avatarUrl));
  },
  addPets: () => {
    dispatch(addPets());
  },
  updatePet: () => {
    dispatch(updatePet());
  },
  clearNewPet: () => {
    dispatch(clearNewPet());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPetForm);
