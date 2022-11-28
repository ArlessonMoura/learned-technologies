import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../Render/renderWithRouter';

// Este requisito estava anteriormente com um unico teste quebrado, todavia não encontrava o motivo.
// Devido ao iminente tempo de entrega a ser encerrado substitui totalmentepor uma solução não autoral,
// Mas que li antes e entendia seu funcionamento total.
// Deixo entregue novo registro com mudança autoral, todavia é inevitavel a tendencia a semelhança com o anterior.

describe('Requisito Pokedex', () => {
  test('Teste se contem um h2', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const title = getByRole('heading', { level: 2, name: 'Encountered pokémons' });
    expect(title).toBeInTheDocument();
  });
  it('Ação botão proximo.', () => {
    const { getByTestId, getAllByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const btnNext = getByTestId('next-pokemon');
    fireEvent.click(btnNext);
    expect(btnNext).toHaveTextContent('Próximo pokémon');
    expect(getAllByRole('link', { name: /more details/i }).length).toBe(1);
    // expect().toHaveTextContent('')
  });
  it('Testa se há um botão que resete o tipo de pokemon.', () => {
    const { getByRole } = renderWithRouter(<App />);
    const resetButton = getByRole('button', {
      name: /All/i,
    });
    fireEvent.click(resetButton);
    expect(resetButton).toBeInTheDocument();
  });
  it('Testa se existe botões para cada tipo de pokemon.', () => {
    const { getAllByTestId } = renderWithRouter(<App />);
    const buttonForType = getAllByTestId('pokemon-type-button');
    userEvent.type(buttonForType);
    expect(buttonForType[1]).toHaveTextContent('Fire');
  });
});
