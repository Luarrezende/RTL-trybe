import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../App';

describe('Testando App', () => {
  describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    test('Teste se a home renderiza o título e o subtítulo', () => {
      // Acessar
      const history = createMemoryHistory();
      render(
        <Router history={ history }>
          <App />
        </Router>,
      );
      const home = screen.getByRole('link', {
        name: 'Home',
      });
      const About = screen.getByRole('link', {
        name: 'About',
      });
      const Favorite = screen.getByRole('link', {
        name: 'Favorite Pokémon',
      });

      // Aferir
      expect(home).toBeInTheDocument();
      expect(About).toBeInTheDocument();
      expect(Favorite).toBeInTheDocument();
    });
  });
});
