import { connect } from 'react-redux';

import LoginForm from '../../components/LoginPage/Auth/LoginForm/LoginForm';

import { toggleShowLogin, changeUserField, login } from '../../actions';

const mapStateToProps = (state) => ({
  showLogin: state.auth.showLogin,
  email: state.users.email,
  password: state.users.password,
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowLogin: () => {
    dispatch(toggleShowLogin());
  },
  changeUserField: (value, name) => {
    dispatch(changeUserField(value, name));
  },
  login: () => {
    dispatch(login());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
