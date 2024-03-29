import { connect } from 'react-redux';

import WeightChart from '../../components/Home/PetDetails/WeightDetails/WeightChart/WeightChart';

const mapStateToProps = (state) => ({
  petWeight: state.pets.currentPet.weight,
});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeightChart);
