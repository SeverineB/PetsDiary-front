import { connect } from 'react-redux';

import NavBar from '../../components/Navbar';

import { logout } from '../../actions';

const mapStateToProps = (state) => ({
  checkIsLogged: state.auth.isLogged,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
