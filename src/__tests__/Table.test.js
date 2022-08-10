import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRedux } from '../tests/helpers/renderWith';
import mockData from '../tests/helpers/mockData';

import Table from '../components/Table';

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

describe('Testando o componente <Table />', () => {
  test('Testando se tem um Título "Descrição" na tela', () => {
    renderWithRedux(<Table />);

    const descTitle = screen.getByRole('columnheader', { name: /descrição/i });

    expect(descTitle).toBeInTheDocument();
  });

  test('Testando se tem uma Tabela na tela', () => {
    renderWithRedux(<Table />);

    const tabTag = screen.getByRole('table', { name: /wallet table/i });

    expect(tabTag).toBeInTheDocument();
  });

  test('Testando se tem um Título "wallet table" na tela', () => {
    renderWithRedux(<Table />, { initialState: INITIAL_STATE });

    const descTitle = screen.getByText(/wallet table/i);
    const buttonAplic = screen.getByTestId(/delete-btn/i);

    expect(descTitle).toBeInTheDocument();
    expect(buttonAplic).toBeInTheDocument();

    userEvent.click(buttonAplic);
  });
});
