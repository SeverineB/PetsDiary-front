import { connect } from 'react-redux';

import {
  getPetsList,
  logout,
  clearCurrentPet
} from '../../actions';

import Home from '../../components/Home/Home';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  session: state.auth.session,
  petsList: state.pets.petsList,
});

const mapDispatchToProps = (dispatch) => ({
  getPetsList: () => {
    const action = getPetsList();
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
