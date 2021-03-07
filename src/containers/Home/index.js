import { connect } from 'react-redux';

import {
  getPetsList,
  getEventsList,
  logout,
  clearCurrentPet
} from '../../actions';

import Home from '../../components/Home/Home';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  session: state.auth.session,
  petsList: state.pets.petsList,
  eventsList: state.events.eventsList,
});

const mapDispatchToProps = (dispatch) => ({
  getPetsList: () => {
    const action = getPetsList();
    dispatch(action);
  },
  getEventsList: () => {
    const action = getEventsList();
    dispatch(action);
  },
  clearCurrentPet: () => {
    dispatch(clearCurrentPet());
  },
  logout: () => {
    dispatch(logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
