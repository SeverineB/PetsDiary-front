import { connect } from 'react-redux';

import {
  openModal,
  changeValue,
  fetchPets,
} from '../../actions';

import Home from '../../components/Home';

const mapStateToProps = (state) => ({
  open: state.pets.open,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPets: () => {
    const action = fetchPets();
    dispatch(action);
  },
  openModal: () => {
    const action = openModal();
    dispatch(action);
  },
  onChange: () => {
    const action = changeValue();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
