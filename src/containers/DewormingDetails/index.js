import { connect } from 'react-redux';

import DewormingDetails from '../../components/Home/PetDetails/DewormingDetails/DewormingDetails';

const mapStateToProps = (state) => ({
    petDeworming: state.pets.currentPet.deworming,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DewormingDetails);
