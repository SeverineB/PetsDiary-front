import { connect } from 'react-redux';

import VaccineDetails from '../../components/Home/PetDetails/VaccineDetails/VaccineDetails';
import {
    changeField,
    addVaccine,
    setErrors
} from '../../actions';

const mapStateToProps = (state) => ({
  petVaccine: state.pets.vaccine,
  error: state.error.error
});

const mapDispatchToProps = (dispatch) => ({
    changeField: (value, name) => {
        const action = changeField(value, name);
        dispatch(action);
    },
    addVaccine: () => {
        const action = addVaccine();
        dispatch(action);
    },
    setErrors: (id, value) => {
        dispatch(setErrors(id, value));
    },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VaccineDetails);
