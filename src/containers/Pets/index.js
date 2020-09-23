import { connect } from 'react-redux';

import {
  deletePets,
} from '../../actions';

import Pets from '../../components/Home/Pets';

const mapStateToProps = (state) => {
  console.log(`Container Pets: j'affiche le state ${state.pets}`);
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
