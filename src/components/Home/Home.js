/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import Pet from '../../containers/Pet';

import logo from '../../assets/img/Logo.png';
import add from '../../assets/img/add.png';

import './Home.scss';

const Home = ({
  isLogged,
  logout,
  petsList,
}) => {
  console.log('ISLOGGED DANS HOME ', isLogged);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className="home-container">
        <img src={logo} alt="cat and dog in badge" className="home-container-logo" />
        <div className="pets-section">
          <h2>Mes animaux</h2>
          <div className="add-pet-button">
            <Link to="/add">
              <img src={add} alt="plus icon" />
            </Link>
          </div>
          <div className="pets-list">
            <Card.Group itemsPerRow={2}>
              {petsList.map((pet) => (
                <>
                  <Link to={`/pet/${pet._id}`} className="pet-name">
                    <Pet key={pet._id} {...pet} />
                  </Link>
                </>
              ))}
            </Card.Group>
          </div>
        </div>
 {/*        <div className="appointments-section">
          <Link to="/appointments">Mes rendez-vous</Link>
        </div> */}
        <div className="logout">
          <button type="submit" className="logout-button" onClick={handleLogout}>Déconnexion</button>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  getPetsList: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  petsList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Home;
