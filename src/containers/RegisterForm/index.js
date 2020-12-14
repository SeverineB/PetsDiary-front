import { connect } from 'react-redux';

import RegisterForm from '../../components/LoginPage/Auth/RegisterForm/RegisterForm';

import {
    register,
    changeUserFieldRegister,
    setRegErrors,
    clearRegErrors,
} from '../../actions';

const mapStateToProps = (state) => ({
    email: state.register.email,
    password: state.register.password,
    username: state.register.username,
    isSignedUp: state.register.isSignedUp,
    isFailed: state.register.isFailed,
    isLoading: state.register.isLoading,
    errors: state.error.regErrors,
});

const mapDispatchToProps = (dispatch) => ({
    toggleShowRegister: () => {
        dispatch(toggleShowRegister());
    },
    changeUserFieldRegister: (value, name) => {
        dispatch(changeUserFieldRegister(value, name));
    },
    registerUser: () => {
        dispatch(register());
    },
    setErrors: (id, value) => {
        dispatch(setRegErrors(id, value));
    },
    clearErrors: () => {
        dispatch(clearRegErrors());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RegisterForm);
