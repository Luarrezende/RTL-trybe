import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
// import { act } from 'react-dom/test-utils';
import App from '../App';
// import renderWithRouter from '../renderWithRouter';

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

  // describe('Teste a rota /about', () => {
  //   test('Navega para a rota /about pelo link', () => {
  //     // Acessar
  //     const { history } = renderWithRouter(<App />);
  //     const aboutLink = screen.getByRole('link', {
  //       name: 'Sobre',
  //     });
  //     expect(history.location.pathname).toBe('/');

  //     // Agir
  //     userEvent.click(aboutLink);

  //     // Aferir
  //     const title = screen.getByRole('heading', {
  //       level: 1,
  //       name: 'Sobre Mim',
  //     });
  //     expect(title).toBeInTheDocument();
  //     expect(history.location.pathname).toBe('/about');
  //   });
  // });

  // describe('Teste a rota /projects', () => {
  //   test('Navega para a rota /projects pelo link', () => {
  //     // Acessar
  //     const { history } = renderWithRouter(<App />);
  //     const projectsLink = screen.getByRole('link', {
  //       name: /projetos/i,
  //     });

  //     // Agir
  //     userEvent.click(projectsLink);

  //     // Aferir
  //     const title = screen.getByRole('heading', {
  //       name: 'Meus Projetos',
  //       level: 1,
  //     });
  //     expect(history.location.pathname).toBe('/projects');
  //     expect(title).toBeInTheDocument();
  //   });
  // });

  // describe('Teste uma rota inexistente', () => {
  //   test('Mostra a página 404 quando navegado para uma rota inexistente', () => {
  //     // Acessar
  //     const { history } = renderWithRouter(<App />);

  //     // Agir
  //     // Fazer isso apenas para o history push
  //     act(() => {
  //       history.push('/xablau');
  //     });

  //     // Aferir
  //     const rafaImage = screen.getByRole('img', {
  //       name: /erro 404/i,
  //     });
  //     const title = screen.getByRole('heading', {
  //       name: /404 page not found/i,
  //     });
  //     const subTitle = screen.getByRole('heading', {
  //       name: /algo de errado não está certo/i,
  //     });
  //     expect(rafaImage).toBeInTheDocument();
  //     expect(title).toBeInTheDocument();
  //     expect(subTitle).toBeInTheDocument();
  //   });
  // });

  // describe('Teste a rota /comments', () => {
  //   test('Mostra se a página comments é renderizada ao clicar no link de comments', () => {
  //     // Acessar
  //     const { history } = renderWithRouter(<App />);

  //     // Agir
  //     const commentsLink = screen.getByRole('link', {
  //       name: 'Comentários',
  //     });

  //     userEvent.click(commentsLink);
  //     expect(history.location.pathname).toBe('/comments');

  //     // Agir
  //     const input = screen.getByRole('textbox');
  //     const button = screen.getByRole('button', {
  //       name: 'Deixe um comentário',
  //     });
  //     userEvent.type(input, 'Muito Bom! Parabéns');
  //     userEvent.click(button);

  //     // Aferir
  //     const comment = screen.getByText('Muito Bom! Parabéns');
  //     expect(comment).toBeInTheDocument();
  //   });
  // });
});
