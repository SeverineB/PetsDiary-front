import { connect } from 'react-redux';

import {
  getEventsList,
  getEventsListByPet
} from '../../actions';

import MyCalendar from '../../components/Home/Appointments/Calendar';

const mapStateToProps = (state) => ({
  eventsList: state.events.eventsList,
  petsList: state.pets.petsList
});

const mapDispatchToProps = (dispatch) => ({
  getEventsList: () => {
    const action = getEventsList();
    dispatch(action);
  },
  getEventsListByPet: (id) => {
    const action = getEventsListByPet(id);
    dispatch(action);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyCalendar);