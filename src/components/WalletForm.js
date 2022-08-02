import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newWallet as newWalletAction } from '../redux/actions';
import getCurrenciesMoney from '../services/economiaAPI';

class WalletForm extends Component {
  async componentDidMount() {
    const { currenciesResponse } = this.props;
    getCurrenciesMoney().then((response) => {
      const payload = Object.keys(response);
      const payFilter = payload.filter((elem) => elem !== 'USDT');
      currenciesResponse(payFilter);
    });
  }

  render() {
    const { currencies } = this.props;
    console.table(currencies);

    return (
      <div>
        <h3 data-testid="value-input">0</h3>
        <h3 data-testid="description-input">0</h3>
        <select
          name="apiCurrencies"
          id="apiCurrencies"
          data-testid="currency-input"
        >
          {currencies.map((e) => (
            <option key={ e } id="apiCurrencies">
              {e}
            </option>
          ))}
        </select>

        <select name="payment" id="payment" data-testid="method-input">
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

        <select name="expensesType" id="expensesType" data-testid="tag-input">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesResponse: (currencies) => dispatch(newWalletAction(currencies)),
});

WalletForm.propTypes = {
  currenciesResponse: PropTypes.func,
  currencies: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
