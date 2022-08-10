import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLine } from '../redux/actions';

class Table extends Component {
  delExpense = (id) => {
    const { newExpenses } = this.props;
    console.log(`id: ${id}`);
    newExpenses(id);
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <caption>Wallet Table</caption>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expens, index) => (
              <tr key={ expens.id }>

                <td
                  className="text-var"
                  id={ index }
                >
                  {expens.description}
                </td>

                <td
                  className="text-var"
                  id={ index }
                >
                  {expens.tag}
                </td>

                <td
                  className="text-var"
                  id={ index }
                >
                  {expens.method}
                </td>

                <td
                  className="text-var"
                  id={ index }
                >
                  {Number(expens.value).toFixed(2)}
                </td>

                <td
                  className="text-var"
                  id={ index }
                >
                  {expens.exchangeRates[expens.currency].name}
                </td>

                <td
                  className="text-var"
                  id={ index }
                >
                  {Number(expens.exchangeRates[expens.currency].ask).toFixed(2)}
                </td>

                <td
                  className="text-var"
                  id={ index }
                >
                  {Number(
                    expens.value * expens.exchangeRates[expens.currency].ask,
                  ).toFixed(2)}
                </td>

                <td
                  className="text-var"
                  id={ index }
                >
                  Real
                </td>

                {/* <td>
                  <button
                    id={ index }
                    type="button"
                    onClick={ this.editExpense }
                    data-testid="edit-btn"
                  >
                    Editar despesa
                  </button>
                </td> */}

                <td>
                  <button
                    data-testid="delete-btn"
                    id={ index }
                    type="button"
                    onClick={ () => this.delExpense(expens.id) }
                  >
                    Excluir
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  newExpenses: (expenses) => dispatch(deleteLine(expenses)),
});

Table.propTypes = {
  expenses: PropTypes.objectOf,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
