import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const PetCard = ({
  _id,
  name,
  age,
  species,
  breed,
  /*picture*/
  deletePets,
}) => {
  const petId = _id;
  console.log(petId);
  const handleDelete = () => {
    console.log('je veux supprimer cet animal' + petId);
    deletePets(petId);
  };

  return (
    <Card>
      {/*<Image src={picture} wrapped ui={false} />*/}
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          {age}
        </Card.Meta>
        <Card.Meta>
          {species}
        </Card.Meta>
        <Card.Meta>
          {breed}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="plus" />
          Sa fiche
        </a>
      </Card.Content>
      <Button
        onClick={handleDelete}
      >
        Supprimer
      </Button>
    </Card>

  );
};

PetCard.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  /*picture: PropTypes.string.isRequired,*/
  deletePets: PropTypes.func.isRequired,
};

export default PetCard;
