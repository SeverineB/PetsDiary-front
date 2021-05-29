import { connect } from 'react-redux';

import { toggleShowLogin, changeUserField, logout } from '../../actions';

import NavBar from '../../components/Navbar/NavBar';

const mapStateToProps = (state) => ({
  showLogin: state.auth.showLogin,
  email: state.users.email,
  password: state.users.password,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowLogin: () => {
    dispatch(toggleShowLogin());
  },
  changeUserField: (value, name) => {
    dispatch(changeUserField(value, name));
  },
  logout: () => {
    dispatch(logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
