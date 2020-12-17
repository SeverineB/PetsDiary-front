import { connect } from 'react-redux';

import DewormingItem from '../../components/Home/PetDetails/DewormingDetails/DewormingItem/DewormingItem';

import {
    deleteDeworming,
} from '../../actions';

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
    deleteDeworming: (id) => {
        const action = deleteDeworming(id);
        dispatch(action);
    },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DewormingItem);