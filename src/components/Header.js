import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  totCash = () => {
    const { expenses } = this.props;
    if (expenses.length > 0) {
      const tot1Cash = expenses
        .reduce((acc, elem) => {
          const chaveCur = elem.currency;
          return acc + elem.value * elem.exchangeRates[chaveCur].ask;
        }, 0)
        .toFixed(2);
      return tot1Cash;
    }
  };

  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <h4 data-testid="email-field">{email}</h4>

        <p data-testid="total-field">{expenses.length === 0 ? '0.00' : this.totCash()}</p>

        <h4 data-testid="header-currency-field">BRL</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
    expenses: state.wallet.expenses,
  };
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
