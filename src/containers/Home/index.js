import { connect } from 'react-redux';

import {
  openModal,
  getPetsList,
  logout,
} from '../../actions';

import Home from '../../components/Home';

const mapStateToProps = (state) => ({
  open: state.pets.open,
  isLogged: state.auth.isLogged,
  session: state.auth.session,
  petsList: state.pets.petsList,
});

const mapDispatchToProps = (dispatch) => ({
  getPetsList: () => {
    const action = getPetsList();
    dispatch(action);
  },
  openModal: () => {
    const action = openModal();
    dispatch(action);
  },
  logout: () => {
    dispatch(logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
