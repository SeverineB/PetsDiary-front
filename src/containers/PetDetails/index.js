/* eslint-disable no-underscore-dangle */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PetDetails from '../../components/Home/PetDetails/PetDetails';

import {
  saveCurrentPet,
  saveCurrentPetDetails,
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
  saveCurrentPetDetails: (petDetails) => {
    const action = saveCurrentPetDetails(petDetails);
    dispatch(action);
  },
});

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PetDetails);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
