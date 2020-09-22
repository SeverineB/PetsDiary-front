import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import Pet from '../../../containers/Pet';

const Pets = ({ pets }) => {
  return (
    <div className="pets-list">
      <Card.Group itemsPerRow={2}>
        {pets.map((pet) => (
          <Pet key={pet._id} {...pet} />
        ))}
      </Card.Group>
    </div>
  );
};

Pets.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Pets;
