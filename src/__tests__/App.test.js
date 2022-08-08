import userEvent from '@testing-library/user-event';
import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouterAndRedux } from '../tests/helpers/renderWith';

describe('Testando o componente <App />', () => {
  test('Testando se renderiza a rota com o "/"', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    expect(history.location.pathname).toBe('/');
  });

  test('Testando se renderiza a rota carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const emailLog = screen.getByTestId('email-input');
    const senhaPlac = screen.getByTestId(/password-input/i);
    const entBtn = screen.getByText(/entrar/i);

    userEvent.type(emailLog, 'test@test.com');
    userEvent.type(senhaPlac, '123456');
    userEvent.click(entBtn);

    expect(history.location.pathname).toBe('/carteira');
  });
});
