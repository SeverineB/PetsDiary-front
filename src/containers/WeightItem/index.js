import { connect } from 'react-redux';

import WeightItem from '../../components/Home/PetDetails/WeightDetails/WeightItem/WeightItem';

import {
    deleteWeight,
} from '../../actions';

const mapStateToProps = (state) => ({
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
)(WeightItem);
