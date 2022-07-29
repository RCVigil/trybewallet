import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newUser as newUserAction } from '../redux/actions';

class Login extends React.Component {
  render() {
    const { newUser } = this.props;
    return (
      <div>
        <label htmlFor="email-input">
          <input type="email" data-testid="email-input" />
        </label>
        <label htmlFor="password-input">
          <input type="password" data-testid="password-input" />
        </label>
        <button
          type="button"
          disabled="disabled"
          onClick={ () => newUserAction(newUser) }
        >
          Entrar
        </button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   userLogin: state.user.email,
// });

const mapDispatchToProps = (dispatch) => ({
  newUser: (email) => dispatch(newUserAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  newUser: PropTypes.object,
}.isRequired;
