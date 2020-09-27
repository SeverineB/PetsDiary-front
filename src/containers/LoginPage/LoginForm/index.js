import { connect } from 'react-redux';

import LoginForm from '../../../components/LoginPage/LoginForm';

import { changeUserField } from '../../../actions/users';
import { openModal } from '../../../actions';

const mapStateToProps = (state) => ({
  open: state.pets.open,
  email: state.users.email,
  password: state.users.password,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: () => {
    const action = openModal();
    dispatch(action);
  },
  changeUserField: (value, name) => {
    dispatch(changeUserField(value, name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
