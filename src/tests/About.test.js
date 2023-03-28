import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../App';

describe('Testando About', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    // Acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const About = screen.getByRole('link', {
      name: 'About',
    });

    // Agir
    userEvent.click(About);

    // Aferir
    const title = screen.getByRole('heading', {
      level: 2,
      name: 'About Pokédex',
    });
    expect(title).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    // Acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const About = screen.getByRole('link', {
      name: 'About',
    });

    // Agir

    userEvent.click(About);

    // Aferir
    const paragraph1 = screen.getByText(
      /this application simulates a pokédex, a digital encyclopedia containing all pokémon/i,
    );
    const paragraph2 = screen.getByText(
      /one can filter pokémon by type, and see more details for each one of them/i,
    );

    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });

  test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    // Acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const About = screen.getByRole('link', {
      name: 'About',
    });

    // Agir

    userEvent.click(About);

    // Aferir
    const img = screen.getByRole('img', {
      name: /pokédex/i,
    });
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
