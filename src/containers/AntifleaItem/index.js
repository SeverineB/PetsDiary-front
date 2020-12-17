import { connect } from 'react-redux';

import AntifleaItem from '../../components/Home/PetDetails/AntifleaDetails/AntifleaItem/AntifleaItem';

import {
    deleteAntiflea,
} from '../../actions';

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
    deleteAntiflea: (id) => {
        const action = deleteAntiflea(id);
        dispatch(action);
    },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AntifleaItem);