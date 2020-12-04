import { connect } from 'react-redux';

import EditPetForm from '../../components/Home/EditPetForm/EditPetForm';
import {
  openModal,
  changeEditField,
  changeEditArrayField,
  changeFile,
  changeUrl,
  addPets,
  updatePet,
  updatePetDetails,
  clearNewPet,
} from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return ({
  /*   pet: state.pets.petsList.find((pet) => pet._id === ownProps.match.params.petId), */
    currentPet: state.pets.petsList.find((pet) => pet._id === ownProps.match.params.petId),
    avatarUrl: state.pets.avatarUrl,
  });
};

const mapDispatchToProps = (dispatch) => ({
  openModal: () => {
    const action = openModal();
    dispatch(action);
  },
  changeEditField: (value, name) => {
    dispatch(changeEditField(value, name));
  },
  changeEditArrayField: (value, name) => {
    dispatch(changeEditArrayField(value, name));
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
  updatePetDetails: () => {
    dispatch(updatePetDetails());
  },
  clearNewPet: () => {
    dispatch(clearNewPet());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPetForm);
