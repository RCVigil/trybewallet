import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newUser } from '../redux/actions';
import './Login.css';

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

  handleClick = (e) => {
    e.preventDefault();
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
      <div className="login">
        <form className="inputForm">
          <div className="card-header">
            <h2>Login</h2>
          </div>

          <div className="card-content">
            <label htmlFor="input-email" className="card-content-area">
              <input
                className="inputEmail"
                id="input-email"
                type="email"
                name="email"
                placeholder="email@email.com"
                data-testid="email-input"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>

            <label htmlFor="input-senha" className="card-content-area">
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
          </div>

          <div className="card-footer">
            <button
              className="submit"
              type="submit"
              disabled={ senha.length < caracterMin || !teste.test(email) }
              onClick={ this.handleClick }
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
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
