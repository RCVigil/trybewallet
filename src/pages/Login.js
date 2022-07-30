import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newUser } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { loginUser, history } = this.props;
    const { email } = this.state;
    loginUser(email);
    history.push('/carteira');
  };

  render() {
    const { email, senha } = this.state;

    // regex.test() metodo que verifica uma string
    const teste = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const caracterMin = 6;

    return (
      <form>
        <label htmlFor="input-email">
          <input
            id="input-email"
            type="email"
            name="email"
            placeholder="email@email.com"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="input-senha">
          <input
            id="input-senha"
            type="password"
            name="senha"
            placeholder="senha"
            data-testid="password-input"
            value={ senha }
            onChange={ this.handleChange }
            autoComplete="on"
          />
        </label>

        <button
          type="button"
          disabled={ senha.length < caracterMin || !teste.test(email) }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (email) => dispatch(newUser(email)),
});

Login.propTypes = {
  loginUser: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
