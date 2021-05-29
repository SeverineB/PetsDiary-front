import { connect } from 'react-redux';

import AddEventForm from '../../components/Home/AddEventForm/AddEventForm';
import {
  openModal,
  changeField,
  changeSelect,
  addEvent,
  clearNewEvent,
} from '../../actions';

const mapStateToProps = (state) => {
  return ({
    title: state.events.title,
    petId: state.events.petId,
    start: state.events.start,
    end: state.events.end,
    address: state.events.address,
    petsList: state.pets.petsList
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeField: (name, value) => {
    dispatch(changeField(value, name));
  },
  changeSelect: (value) => {
    dispatch(changeSelect(value));
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
