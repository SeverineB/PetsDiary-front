import { connect } from 'react-redux';

import {
  getEventsList
} from '../../actions';

import Appointments from '../../components/Home/Appointments/Appointments';

const mapStateToProps = (state) => ({
  eventsList: state.events.eventsList,
});

const mapDispatchToProps = (dispatch) => ({
  getEventsList: () => {
    const action = getEventsList();
    dispatch(action);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Appointments);
