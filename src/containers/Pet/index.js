import { connect } from 'react-redux';

import {
  deletePets,
} from '../../actions';

import Pet from '../../components/Home/Pets/Pet';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  deletePets: (id) => {
    const action = deletePets(id);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pet);
