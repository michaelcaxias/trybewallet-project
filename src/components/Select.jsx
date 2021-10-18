import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'semantic-ui-react';

export default function Select(props) {
  const { id, label, array, value, onChange } = props;

  const optionsTest = array.map((item) => ({
    key: item, text: item, value: item,
  }));

  return (
    <Form.Select
      fluid
      id={ id }
      label={ label }
      options={ optionsTest }
      value={ value }
      onChange={ (e, propsSelect) => onChange(propsSelect) }
    />
  );
}

Select.propTypes = {
  array: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
