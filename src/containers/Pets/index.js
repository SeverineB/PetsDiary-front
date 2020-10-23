import { connect } from 'react-redux';

import {
  deletePets,
} from '../../actions';

import Pets from '../../components/Home/Pets/pets';

const mapStateToProps = (state) => {
  return ({
    petsList: state.pets.petsList,
  });
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pets);
