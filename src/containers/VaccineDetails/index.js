import { connect } from 'react-redux';

import VaccineDetails from '../../components/Home/PetDetails/VaccineDetails/VaccineDetails';
import {
  updateVaccine,
} from '../../actions';

const mapStateToProps = (state) => ({
  petVaccine: state.pets.currentPet.vaccine,
});

const mapDispatchToProps = (dispatch) => ({
  updateVaccine: () => {
    const action = updateVaccine();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VaccineDetails);
