import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../App';

describe('Ao favoritar a partir da página de detalhes teste se', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    // Acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const Favorite = screen.getByRole('link', {
      name: 'Favorite Pokémon',
    });

    // Agir
    userEvent.click(Favorite);

    // Aferir
    const noFav = screen.getByText(/no favorite pokémon found/i);
    expect(noFav).toBeInTheDocument();
  });

  test('Teste se apenas são exibidos os Pokémon favoritados', () => {
    // Acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const eletric = screen.getByRole('button', {
      name: /electric/i,
    });

    // Agir
    userEvent.click(eletric);

    const detail = screen.getByRole('link', {
      name: /more details/i,
    });

    userEvent.click(detail);

    const checked = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });

    userEvent.click(checked);

    const favorite = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });

    userEvent.click(favorite);
    // Aferir
    const name = screen.getByText(/Pikachu/i);
    const type = screen.getByText(/Electric/i);
    const weight = screen.getByText(/average weight: 6\.0 kg/i);

    expect(name).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(weight).toBeInTheDocument();
  });
});
