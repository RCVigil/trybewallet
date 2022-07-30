import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { user } from '../redux/reducers/user';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h4 data-testid="email-field">{email}</h4>
        <h4 data-testid="total-field">0</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
