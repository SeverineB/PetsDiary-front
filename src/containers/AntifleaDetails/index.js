import { connect } from 'react-redux';

import AntifleaDetails from '../../components/Home/PetDetails/AntifleaDetails/AntifleaDetails';

const mapStateToProps = (state) => ({
  petAntiflea: state.pets.currentPet.antiflea,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AntifleaDetails);
