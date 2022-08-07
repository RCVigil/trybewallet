import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRedux } from '../tests/helpers/renderWith';

import WalletForm from '../components/WalletForm';

describe('Testando o componente <WalletForm />', () => {
  test('Testando se tem input de numero  na tela', () => {
    renderWithRedux(<WalletForm />);

    const numInp = screen.getByRole('spinbutton');

    expect(numInp).toBeInTheDocument();
  });

  test('Testando se tem input de texto  na tela', () => {
    renderWithRedux(<WalletForm />);

    const textInp = screen.getByRole('textbox');

    expect(textInp).toBeInTheDocument();
  });

  test('Testando se tem o botao "Adicionar despesa" na tela', () => {
    renderWithRedux(<WalletForm />);

    const despButton = screen.getByRole('button', { name: /adicionar despesa/i });

    expect(despButton).toBeInTheDocument();
  });
});
