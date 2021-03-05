import { connect } from 'react-redux';

import EditPetForm from '../../components/Home/EditPetForm/EditPetForm';
import {
    changeEditField,
    changeFile,
    changeUrl,
    addPet,
    updatePet,
    updateWeight,
    clearNewPet,
} from '../../actions';

const mapStateToProps = (state) => {
return ({
    currentPet: state.pets.currentPet,
    id: state.pets.id,
    avatar: state.pets.avatar,
    name: state.pets.name,
    age: state.pets.age,
    species: state.pets.species,
    breed: state.pets.breed,
    birthdate: state.pets.birthdate,
    ide: state.pets.ide,
    avatarUrl: state.pets.avatarUrl,
});
};

const mapDispatchToProps = (dispatch) => ({
    changeEditField: (value, name) => {
        dispatch(changeEditField(value, name));
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
    updatePet: () => {
        dispatch(updatePet());
    },
    updateWeight: () => {
        dispatch(updateWeight());
    },
    clearNewPet: () => {
        dispatch(clearNewPet());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditPetForm);
