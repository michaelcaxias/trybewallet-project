import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { deleteExpenses } from '../actions';

function ButtonDelete({ id, deleteExpense }) {
  const handleDelete = () => {
    deleteExpense(id);
  };

  return (
    <Button
      onClick={ handleDelete }
      data-testid="delete-btn"
      color="red"
      content="Excluir"
      icon="trash"
    />
  );
}

ButtonDelete.propTypes = {
  id: PropTypes.number.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(deleteExpenses(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonDelete);
