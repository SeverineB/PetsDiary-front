import { connect } from 'react-redux';

import AntifleaDetails from '../../components/Home/PetDetails/AntifleaDetails/AntifleaDetails';
import {
    changeField,
    addAntiflea,
    setErrors
} from '../../actions';

const mapStateToProps = (state) => ({
  petAntiflea: state.pets.currentPet.antiflea,
  error: state.error.error
});

const mapDispatchToProps = (dispatch) => ({
    changeField: (value, name) => {
        const action = changeField(value, name);
        dispatch(action);
    },
    addAntiflea: () => {
        const action = addAntiflea();
        dispatch(action);
    },
    setErrors: (id, value) => {
        dispatch(setErrors(id, value));
    },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AntifleaDetails);
