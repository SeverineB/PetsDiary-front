import { connect } from 'react-redux';

import AddPetForm from '../../components/Home/AddPetForm';

const mapStateToProps = (state) => {
  console.log(`Container AddPetForm: j'affiche le state ${state.pets.petsList}`);
  return ({

  });
};
const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPetForm);
