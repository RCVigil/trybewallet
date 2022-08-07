import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import Login from '../pages/Login';
import { renderWithRedux } from '../tests/helpers/renderWith';

describe('Testando o componente <Login.js />', () => {
  test('Verificando o texto Login na Home', () => {
    renderWithRedux(<Login />);
    const LinkComponentH = screen.getByRole('heading', {
      name: /login/i,
      level: 2,
    });

    const emailLog = screen.getByRole('textbox');

    const senhaPlac = screen.getByPlaceholderText(/senha/i);

    expect(LinkComponentH).toBeInTheDocument();
    expect(emailLog).toBeInTheDocument();
    expect(senhaPlac).toBeInTheDocument();
  });

  test('Verificando o texto Placeholder E-mail na Login', () => {
    renderWithRedux(<Login />);

    const emailPlac = screen.getByPlaceholderText(/email/i);

    expect(emailPlac).toBeInTheDocument();
  });

  test('Testando o botão Entrar', () => {
    renderWithRedux(<Login />);

    const buttonEntrar = screen.getByRole('button', { name: /entrar/i });

    fireEvent.click(buttonEntrar);

    expect(buttonEntrar).toBeInTheDocument();
  });
});
