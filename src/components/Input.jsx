import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'semantic-ui-react';

export default function Input({ inputValue, onChange, label, id, type = 'text' }) {
  return (
    <Form.Input
      type={ type }
      value={ inputValue }
      id={ id }
      label={ label }
      onChange={ ({ target }) => onChange(target) }
    />
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
