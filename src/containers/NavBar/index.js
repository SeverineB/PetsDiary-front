import { connect } from 'react-redux';

import NavBar from '../../components/Navbar';

<<<<<<< HEAD
import { logout } from '../../actions';

const mapStateToProps = (state) => ({
  checkIsLogged: state.auth.isLogged,
});
const mapDispatchToProps = (dispatch) => ({
=======
import { toggleShowLogin, changeUserField, logout } from '../../actions';

const mapStateToProps = (state) => ({
  showLogin: state.auth.showLogin,
  email: state.users.email,
  password: state.users.password,
  checkIsLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowLogin: () => {
    dispatch(toggleShowLogin());
  },
  changeUserField: (value, name) => {
    dispatch(changeUserField(value, name));
  },
>>>>>>> 17b0ac981221f1cc4ed9338e200a3cb8f3eb4bdb
  logout: () => {
    dispatch(logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
