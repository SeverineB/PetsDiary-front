import { connect } from 'react-redux';

import RegisterForm from '../../../components/LoginPage/Forms/RegisterForm';

import { registerUser, changeUserField } from '../../../actions/users';

const mapStateToProps = (state) => {
  return ({
    email: state.users.email,
    password: state.users.password,
    username: state.users.username,
  });
};

const mapDispatchToProps = (dispatch) => ({
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
