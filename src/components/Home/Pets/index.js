import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import Pet from '../../../containers/Pet';

import './pets.scss';

const Pets = ({ petsList }) => {
  console.log(petsList);
  return (
    <div className="pets-list">
      <Card.Group itemsPerRow={2}>
        {petsList.map((pet) => (
          <Pet key={pet._id} {...pet} />
        ))}
      </Card.Group>
    </div>
  );
};

Pets.propTypes = {
  petsList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Pets;
