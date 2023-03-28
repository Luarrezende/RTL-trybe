import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../App';

describe('testa Pokedex', () => {
  test('Teste se a home renderiza o título', () => {
    // Acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const Title = screen.getByRole('heading', {
      name: /encountered pokémon/i,
      level: 2,
    });

    // Aferir
    expect(Title).toBeInTheDocument();
  });

  test('Testa se botão tem o texto "próximo pokemon"', () => {
    // Acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const nextPokemon = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });

    // Aferir
    expect(nextPokemon).toBeInTheDocument();
  });

  test('Testa se botão "próximo pokemon" funciona corretamente', () => {
    // Acessar
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const nextPokemon = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });
    const pokemonName = screen.getByTestId('pokemon-name');

    userEvent.click(nextPokemon);
    userEvent.click(nextPokemon);
    userEvent.click(nextPokemon);
    userEvent.click(nextPokemon);
    userEvent.click(nextPokemon);
    userEvent.click(nextPokemon);
    userEvent.click(nextPokemon);
    userEvent.click(nextPokemon);
    expect(pokemonName.textContent).toBe('Dragonair');

    userEvent.click(nextPokemon);
    expect(pokemonName.textContent).toBe('Pikachu');

    const img = screen.getAllByRole('img');
    expect(img).toHaveLength(1);
  });

  test('Testa se a imagem do pokemon aparece uma de cada vez', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const types = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    const buttonAll = screen.getByText('All');
    expect(buttonAll).toBeDefined();
    const btns = screen.getAllByTestId('pokemon-type-button');
    btns.forEach((btnType, index) => {
      expect(btnType).toBeDefined();
      const type = screen.getByRole('button', {
        name: types[index],
      });
      userEvent.click(type);
    });
  });

  test('Testa se botão All retorna pikachu', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const buttonFire = screen.getByRole('button', {
      name: /fire/i,
    });

    userEvent.click(buttonFire);

    const nameCharmander = screen.getByText(/Charmander/i);
    expect(nameCharmander).toBeInTheDocument();

    const buttonAll = screen.getByRole('button', {
      name: 'All',
    });

    userEvent.click(buttonAll);

    const name = screen.getByText(/Pikachu/i);
    const weight = screen.getByText(/average weight: 6\.0 kg/i);
    expect(name).toBeInTheDocument();
    expect(weight).toBeInTheDocument();
  });
});
