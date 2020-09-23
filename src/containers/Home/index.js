import { connect } from 'react-redux';

import {
  openModal,
  getPetsList,
} from '../../actions';

import Home from '../../components/Home';

const mapStateToProps = (state) => ({
  open: state.pets.open,
});

const mapDispatchToProps = (dispatch) => ({
  getPetsList: () => {
    const action = getPetsList();
    dispatch(action);
  },
  openModal: () => {
    const action = openModal();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
