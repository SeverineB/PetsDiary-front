import { connect } from 'react-redux';

import RegisterForm from '../../components/LoginPage/Auth/RegisterForm';

import { registerUser, changeUserField, toggleShowRegister } from '../../actions';

const mapStateToProps = (state) => ({
  showRegister: state.auth.showRegister,
  email: state.users.email,
  password: state.users.password,
  username: state.users.username,
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowRegister: () => {
    dispatch(toggleShowRegister());
  },
  changeUserField: (value, name) => {
    dispatch(changeUserField(value, name));
  },
  registerUser: () => {
    const action = registerUser();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm);
