import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'semantic-ui-react';
import ButtonDelete from '../ButtonDelete';
import ButtonEdit from '../ButtonEdit';
import './TableExpense.css';

const tableHeader = ['Descrição',
  'Tag',
  'Método de pagamento',
  'Valor', 'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

function TableExpense({ expenses }) {
  return (
    <Table color="black" inverted className="table-wallet">
      <Table.Header>
        <Table.Row>
          {tableHeader.map((item) => (
            <Table.HeaderCell key={ item }>{item}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {expenses.map((expense, index) => {
          const currentCurrency = expense.exchangeRates[expense.currency];
          const ask = Number(currentCurrency.ask);
          return (
            <Table.Row key={ index }>
              <Table.Cell>{expense.description}</Table.Cell>
              <Table.Cell>{expense.tag}</Table.Cell>
              <Table.Cell>{expense.method}</Table.Cell>
              <Table.Cell>{expense.value}</Table.Cell>
              <Table.Cell>{currentCurrency.name.split('/')[0]}</Table.Cell>
              <Table.Cell>{ask.toFixed(2)}</Table.Cell>
              <Table.Cell>{(expense.value * ask).toFixed(2)}</Table.Cell>
              <Table.Cell>Real</Table.Cell>
              <Button.Group labeled icon>
                <ButtonEdit id={ expense.id } />
                <ButtonDelete id={ expense.id } />
              </Button.Group>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

TableExpense.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

export default connect(mapStateToProps, null)(TableExpense);
