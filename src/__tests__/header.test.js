import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithRedux } from '../tests/helpers/renderWith';
import Header from '../components/Header';

describe('Testando o componente <Header />', () => {
  test('Testando se tem Brl na tela', () => {
    renderWithRedux(<Header />);

    const brlCont = screen.getByRole('heading', { name: /brl/i });

    expect(brlCont).toBeInTheDocument();
  });

  test('Testando se tem um 0 na tela', () => {
    renderWithRedux(<Header />);

    const paragCont = screen.getByText(0);

    expect(paragCont).toBeInTheDocument(0);
  });

  test('Testando se tem um email na tela', () => {
    renderWithRedux(<Header />);

    const emailCont = screen.getByTestId('email-field');

    expect(emailCont).toBeInTheDocument();
  });
});
