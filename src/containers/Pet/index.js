import { connect } from 'react-redux';

import {
  deletePet,
} from '../../actions';

import Pet from '../../components/Home/Pet/Pet';

const mapStateToProps = (state) => ({
  petDetails: state.pets.petDetails,
});

const mapDispatchToProps = (dispatch) => ({
  deletePet: (id) => {
    const action = deletePet(id);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pet);
