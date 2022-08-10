import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRedux } from '../tests/helpers/renderWith';

import Table from '../components/Table';

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
    renderWithRedux(<Table />);

    const descTitle = screen.getByText(/wallet table/i);

    expect(descTitle).toBeInTheDocument();
  });
});
