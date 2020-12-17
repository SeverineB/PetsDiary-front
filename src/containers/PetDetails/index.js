/* eslint-disable no-underscore-dangle */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PetDetails from '../../components/Home/PetDetails/PetDetails';

import {
    saveCurrentPet,
    saveCurrentWeight,
    saveCurrentVaccine,
    deletePet
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
    deletePet: (id) => {
        const action = deletePet(id);
        dispatch(action);
    },
});

const container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PetDetails);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
