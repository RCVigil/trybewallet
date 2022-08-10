import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  newWallet as newWalletAction,
  newExpenses as newExpensesActions,
} from '../redux/actions';
import getCurrenciesMoney from '../services/economiaAPI';

const alimentacao = 'Alimentação';
class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
      id: 0,
    };
  }

  componentDidMount() {
    this.currencieHere();
  }

  currencieHere = () => {
    const { currenciesResponse } = this.props;
    getCurrenciesMoney().then((response) => {
      const payload = Object.keys(response);
      const payFilter = payload.filter((elem) => elem !== 'USDT');
      currenciesResponse(payFilter);
    });
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = async (e) => {
    e.preventDefault();

    const { expensesResponse } = this.props;
    const { id } = this.state;

    expensesResponse({
      ...this.state,
      exchangeRates: await getCurrenciesMoney(),
    });

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
      id: id + 1,
    });
  };

  render() {
    const { currencies } = this.props;

    const { value, description, currency, method, tag } = this.state;

    return (
      <div>

        <input
          type="number"
          placeholder="valor gasto"
          value={ value }
          name="value"
          data-testid="value-input"
          onChange={ this.handleChange }
          required
        />

        <input
          type="text"
          value={ description }
          name="description"
          data-testid="description-input"
          onChange={ this.handleChange }
          required
        />

        <select
          name="currency"
          id="apiCurrencies"
          data-testid="currency-input"
          value={ currency }
          onChange={ this.handleChange }
          required
        >
          {currencies.map((e) => (
            <option key={ e } id="apiCurrencies">
              {e}
            </option>
          ))}
        </select>

        <select
          name="method"
          id="payment"
          data-testid="method-input"
          value={ method }
          onChange={ this.handleChange }
          required
        >
          <option id="payment" value="Dinheiro">
            Dinheiro
          </option>

          <option id="payment" value="Cartão de crédito">
            Cartão de crédito
          </option>

          <option id="payment" value="Cartão de débito">
            Cartão de débito
          </option>
        </select>

        <select
          name="tag"
          id="expensesType"
          data-testid="tag-input"
          value={ tag }
          onChange={ this.handleChange }
          required
        >
          <option id="expensesType" value="Alimentação">
            Alimentação
          </option>

          <option id="expensesType" value="Lazer">
            Lazer
          </option>

          <option id="expensesType" value="Trabalho">
            Trabalho
          </option>

          <option id="expensesType" value="Transporte">
            Transporte
          </option>

          <option id="expensesType" value="Saúde">
            Saúde
          </option>
        </select>

        <button
          type="submit"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesResponse: (currencies) => dispatch(newWalletAction(currencies)),

  expensesResponse: (
    expenses,
  ) => dispatch(newExpensesActions(expenses)),
});

WalletForm.propTypes = {
  expensesResponse: PropTypes.func,
  currenciesResponse: PropTypes.func,
  currencies: PropTypes.string,
  expenses: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
