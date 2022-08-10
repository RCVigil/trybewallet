import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithRedux } from '../tests/helpers/renderWith';
import Header from '../components/Header';
import mockData from '../tests/helpers/mockData';

const INITIAL_STATE = {
  user: {
    email: 'teste@gmail.com',
  },
  wallet: {
    currencies: [Object.keys(mockData)],
    expenses: [
      {
        id: 0,
        value: '35',
        description: 'Carro',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        exchangeRates: mockData,
      },
    ],
  },
};

describe('Testando o componente <Header />', () => {
  test('Testando se tem Brl na tela', () => {
    renderWithRedux(<Header />);

    const brlCont = screen.getByRole('heading', { name: /brl/i });

    expect(brlCont).toBeInTheDocument();
  });

  test('Testando se tem um 0.00 na tela', () => {
    renderWithRedux(<Header />, { initialState: INITIAL_STATE });

    const paragCont = screen.getByText('166.36');

    expect(paragCont).toBeInTheDocument();
  });

  test('Testando se tem um email na tela', () => {
    renderWithRedux(<Header />);

    const emailCont = screen.getByTestId('email-field');

    expect(emailCont).toBeInTheDocument();
  });
});
