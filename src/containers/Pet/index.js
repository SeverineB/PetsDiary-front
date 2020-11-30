import { connect } from 'react-redux';

import {
  getPetDetailsByPetId,
  deletePets,
} from '../../actions';

import Pet from '../../components/Home/Pet/Pet';

const mapStateToProps = (state) => ({
  petDetails: state.pets.petDetails,
});

const mapDispatchToProps = (dispatch) => ({
  deletePets: (id) => {
    const action = deletePets(id);
    dispatch(action);
  },
  getPetDetails: () => {
    const action = getPetDetailsByPetId();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pet);
