import { connect } from 'react-redux';

import AddPetForm from '../../components/Home/AddPetForm/AddPetForm';
import {
  openModal,
  changeField,
  changeFile,
  changeUrl,
  addPet,
  clearNewPet,
} from '../../actions';

const mapStateToProps = (state) => {
  return ({
    name: state.pets.name,
    age: state.pets.age,
    species: state.pets.species,
    breed: state.pets.breed,
    sex: state.pets.sex,
    birthdate: state.pets.birthdate,
    ide: state.pets.ide,
    avatar: state.pets.avatar,
    avatarUrl: state.pets.avatarUrl,
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeField: (name, value) => {
    dispatch(changeField(value, name));
  },
  changeFile: (avatar) => {
    dispatch(changeFile(avatar));
  },
  changeUrl: (avatarUrl) => {
    dispatch(changeUrl(avatarUrl));
  },
  addPet: () => {
    dispatch(addPet());
  },
  clearNewPet: () => {
    dispatch(clearNewPet());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPetForm);
