import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          {/* <caption>Wallet Table</caption> */}
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
            {expenses.map((e, index) => (
              <tr key={ index }>
                <td className="text-var">{e.description}</td>
                <td className="text-var">{e.tag}</td>
                <td className="text-var">{e.method}</td>
                <td className="text-var">{Number(e.value).toFixed(2)}</td>
                <td className="text-var">{e.exchangeRates[e.currency].name}</td>
                <td className="text-var">
                  {Number(e.exchangeRates[e.currency].ask).toFixed(2)}
                </td>
                <td className="text-var">
                  {Number(e.value * e.exchangeRates[e.currency].ask).toFixed(2)}
                </td>
                <td className="text-var">Real</td>
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

Table.propTypes = {
  expenses: PropTypes.objectOf,
}.isRequired;

export default connect(mapStateToProps)(Table);
