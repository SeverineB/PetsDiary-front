/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
    console.log('Component Field : je récupère la saisie de ' + name + ' qui est ' + evt.target.value);
  };

  return (
    <div className="add-pet-form-field">
      <input
        value={value}
        onChange={handleChange}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />
      {/* {console.log('j\'affiche la value :' + value)} */}
      <label
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  value: '',
  type: 'text',
};

export default Field;
