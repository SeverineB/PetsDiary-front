import { connect } from 'react-redux';

import LoginForm from '../../../components/LoginPage/Forms/LoginForm';

import { changeUserField } from '../../../actions/users';

const mapStateToProps = (state) => ({
  email: state.users.email,
  password: state.users.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeUserField: (value, name) => {
    dispatch(changeUserField(value, name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
