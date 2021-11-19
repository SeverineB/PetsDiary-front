import { connect } from 'react-redux';

import Auth from '../../components/LoginPage/Auth/Auth';

import { toggleLogin, logout } from '../../actions';

const mapStateToProps = (state) => ({
  checkIsLogged: state.auth.isLogged,
  isSignedUp: state.register.isSignedUp,
  isFailed: state.register.isFailed
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
