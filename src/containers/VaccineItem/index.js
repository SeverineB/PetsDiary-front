import { connect } from 'react-redux';

import VaccineItem from '../../components/Home/PetDetails/VaccineDetails/VaccineItem/VaccineItem';

import {
    deleteVaccine,
} from '../../actions';

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
    deleteVaccine: (id) => {
        const action = deleteVaccine(id);
        dispatch(action);
    },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VaccineItem);
