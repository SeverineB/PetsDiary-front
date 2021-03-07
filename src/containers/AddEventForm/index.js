import { connect } from 'react-redux';

import AddEventForm from '../../components/Home/AddEventForm/AddEventForm';
import {
  openModal,
  changeField,
  addEvent,
  clearNewEvent,
} from '../../actions';

const mapStateToProps = (state) => {
  return ({
    name: state.events.name,
    startDate: state.events.startDate,
    endDate: state.events.endDate,
    address: state.events.address,
    petsList: state.pets.petsList
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeField: (name, value) => {
    dispatch(changeField(value, name));
  },
  addEvent: () => {
    dispatch(addEvent());
  },
  clearNewEvent: () => {
    dispatch(clearNewEvent());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddEventForm);
