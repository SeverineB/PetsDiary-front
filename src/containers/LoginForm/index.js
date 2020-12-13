import { connect } from 'react-redux';

import LoginForm from '../../components/LoginPage/Auth/LoginForm/LoginForm';

import {
    changeUserField,
    login,
    setLogErrors,
    clearLogErrors
} from '../../actions';

const mapStateToProps = (state) => ({
    email: state.users.email,
    password: state.users.password,
    isLoading: state.auth.isLoading,
    isLogged: state.auth.isLogged,
    isFailed: state.auth.isFailed,
    errors: state.error.logErrors,
    error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => ({
    changeUserField: (value, name) => {
        dispatch(changeUserField(value, name));
    },
    login: () => {
        dispatch(login());
    },
    setErrors: (id, value) => {
        dispatch(setLogErrors(id, value));
    },
    clearErrors: () => {
        dispatch(clearLogErrors());
    },
});

export default connect(
mapStateToProps,
mapDispatchToProps,
)(LoginForm);
