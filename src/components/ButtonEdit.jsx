import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { editExpenses } from '../actions';

function ButtonEdit({ id, editExpense }) {
  const handleEdit = () => {
    editExpense(id);
  };

  return (
    <Button
      onClick={ handleEdit }
      data-testid="edit-btn"
      color="yellow"
      content="Editar"
      icon="edit"
    />
  );
}

ButtonEdit.propTypes = {
  id: PropTypes.number.isRequired,
  editExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id) => dispatch(editExpenses(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonEdit);
