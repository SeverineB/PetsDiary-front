import { connect } from 'react-redux';

import DewormingDetails from '../../components/Home/PetDetails/DewormingDetails/DewormingDetails';
import {
    changeField,
    addDeworming,
    setErrors,
} from '../../actions';

const mapStateToProps = (state) => ({
    petDeworming: state.pets.deworming,
    error: state.error.error,
});

const mapDispatchToProps = (dispatch) => ({
    changeField: (value, name) => {
        const action = changeField(value, name);
        dispatch(action);
    },
    addDeworming: () => {
        const action = addDeworming();
        dispatch(action);
      },
      setErrors: (id, value) => {
        dispatch(setErrors(id, value));
    },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DewormingDetails);
