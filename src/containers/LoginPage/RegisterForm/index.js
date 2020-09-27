import { connect } from 'react-redux';

import RegisterForm from '../../../components/LoginPage/RegisterForm';

import { registerUser, changeUserField } from '../../../actions/users';
import { openModal } from '../../../actions';

const mapStateToProps = (state) => {
  return ({
    open: state.pets.open,
    dimmer: state.pets.dimmer,
    email: state.users.email,
    password: state.users.password,
    username: state.users.username,
  });
};

const mapDispatchToProps = (dispatch) => ({
  openModal: () => {
    const action = openModal();
    dispatch(action);
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
