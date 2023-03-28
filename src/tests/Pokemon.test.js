import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  test('Teste se a home renderiza o título e o subtítulo', async () => {
    const { history } = renderWithRouter(<App />);

    const details = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(details);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/25');
    const weight = await screen.findByText('Average weight: 6.0 kg');
    expect(weight).toHaveTextContent('Average weight: 6.0 kg');
    const type = await screen.findByText('Electric');
    expect(type).toHaveTextContent('Electric');
    const name = await screen.findByText('Pikachu');
    expect(name).toHaveTextContent('Pikachu');
    const img = screen.getByRole('img', {
      name: /pikachu sprite/i,
      alt: /Pikachu sprite/i,
    });
    expect(img).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(`${img.alt}`).toBe('Pikachu sprite');
    userEvent.click(screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    }));
    expect(screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    })).toBeInTheDocument();
    const imageFav = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });
    expect(imageFav.src).toContain('/star-icon.svg');
  });
});
