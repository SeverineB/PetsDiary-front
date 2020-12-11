import { connect } from 'react-redux';

import WeightItem from '../../components/Home/PetDetails/WeightDetails/WeightItem';

import {
    deleteWeight,
    removeWeight
} from '../../actions';

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
    deleteWeight: (id) => {
        const action = deleteWeight(id);
        dispatch(action);
    },
    removeWeight: (id) => {
        const action = removeWeight(id);
        dispatch(action);
    },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeightItem);
