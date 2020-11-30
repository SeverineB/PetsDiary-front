import { connect } from 'react-redux';

import App from '../../components/App/App';

import { check, getPetsList } from '../../actions';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  session: state.auth.session,
});

const mapDispatchToProps = (dispatch) => ({
  check: () => {
    dispatch(check());
  },
  getPetsList: () => {
    const action = getPetsList();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
