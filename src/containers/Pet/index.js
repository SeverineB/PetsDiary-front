import { connect } from 'react-redux';

import {
    savePetToDelete,
    deletePetOnScreen,
    deletePet,
    getPetsList,
} from '../../actions';

import Pet from '../../components/Home/Pet/Pet';

const mapStateToProps = (state) => ({
  petDetails: state.pets.petDetails,
});

const mapDispatchToProps = (dispatch) => ({
    savePetToDelete: (id) => {
        dispatch(savePetToDelete(id));
        },
    deletePet: () => {
        const action = deletePet();
        dispatch(action);
    },
    deletePetOnScreen: (id) => {
        const action = deletePetOnScreen(id);
        dispatch(action);
    },
    getPetsList: () => {
        const action = getPetsList();
        dispatch(action);
      },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pet);
