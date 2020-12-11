import { connect } from 'react-redux';

import WeightDetails from '../../components/Home/PetDetails/WeightDetails/WeightDetails';

import {
    deleteWeight
} from '../../actions';

const mapStateToProps = (state) => ({
    petWeight: state.pets.weight,
});

const mapDispatchToProps = (dispatch) => ({
    deleteWeight: (id) => {
        const action = deleteWeight(id);
        dispatch(action);
    },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeightDetails);
