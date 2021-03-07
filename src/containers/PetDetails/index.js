/* eslint-disable no-underscore-dangle */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PetDetails from '../../components/Home/PetDetails/PetDetails';

import {
    saveCurrentPet,
    saveCurrentWeight,
    saveCurrentVaccine,
    saveCurrentAntiflea,
    saveCurrentDeworming,
    savePetToDelete,
    deletePet,
    deletePetOnScreen
} from '../../actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        petsList: state.pets.petsList,
        pet: state.pets.petsList.find((pet) => pet._id === ownProps.match.params.petId),
    });
};

const mapDispatchToProps = (dispatch) => ({
    saveCurrentPet: (currentPet) => {
        const action = saveCurrentPet(currentPet);
        dispatch(action);
    },
    saveCurrentWeight: (weight) => {
        const action = saveCurrentWeight(weight);
        dispatch(action);
    },
    saveCurrentVaccine: (vaccine) => {
        const action = saveCurrentVaccine(vaccine);
        dispatch(action);
    },
    saveCurrentAntiflea: (antiflea) => {
        const action = saveCurrentAntiflea(antiflea);
        dispatch(action);
    },
    saveCurrentDeworming: (deworming) => {
        const action = saveCurrentDeworming(deworming);
        dispatch(action);
    },
    savePetToDelete: (id) => {
        dispatch(savePetToDelete(id));
    },
    deletePet: (id) => {
        const action = deletePet(id);
        dispatch(action);
    },
    deletePetOnScreen: (id) => {
        const action = deletePetOnScreen(id);
        dispatch(action);
    },
});

const container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PetDetails);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
