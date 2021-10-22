import { connect } from 'react-redux';

import WeightDetails from '../../components/Home/PetDetails/WeightDetails/WeightDetails';

import {
    changeField,
    setErrors,
    addWeight
} from '../../actions';

const mapStateToProps = (state) => ({
    error: state.error.error,
});

const mapDispatchToProps = (dispatch) => ({
    changeField: (value, name) => {
        const action = changeField(value, name);
        dispatch(action);
    },
    addWeight: () => {
        dispatch(addWeight());
    },
    setErrors: (id, value) => {
        dispatch(setErrors(id, value));
    },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeightDetails);
