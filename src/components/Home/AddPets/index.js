import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const AddPets = ({  }) => (
  <div>
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
);

AddPets.propTypes = {
 : ,
};
export default AddPets;
