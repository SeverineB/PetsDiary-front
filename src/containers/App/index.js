import { connect } from 'react-redux';

import App from '../../components/App';

import { check } from '../../actions';

const mapStateToProps = (state) => ({
  checkIsLogged: state.auth.isLogged,
  session: state.auth.session,
});

const mapDispatchToProps = (dispatch) => ({
  check: () => {
    dispatch(check());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
