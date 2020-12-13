import { connect } from 'react-redux';

import Auth from '../../components/LoginPage/Auth/Auth';

import { toggleLogin, logout } from '../../actions';

const mapStateToProps = (state) => ({
  openLogin: state.auth.openLogin,
  checkIsLogged: state.auth.isLogged,
});
const mapDispatchToProps = (dispatch) => ({
  toggleLogin: () => {
    const action = toggleLogin();
    dispatch(action);
  },
  logout: () => {
    dispatch(logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
