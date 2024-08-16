/* eslint-disable testing-library/no-node-access */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Navigation from '../components/Navigation';

vi.mock('../components/FruitsIndex', () => {
  return {
    default: () => <>Fruits Index</>
  }
});
vi.mock('../components/FruitForm', () => {
  return {
    default: () => <>Fruit Form</>
  }
});
vi.mock('../components/FavoriteFruit', () => {
  return {
    default: () => <>My Favorite Fruit</>
  }
});
vi.mock('../components/SetFavoriteFruit', () => {
  return {
    default: () => <>Set Favorite Fruit</>
  }
});

describe('(6 points) Navigation', () => {
  it ('(1 point) should render four navigation links: "Home", "Enter a Fruit", "Favorite Fruit", and "Set Favorite Fruit"', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getAllByRole('link').length).toEqual(4);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Enter a Fruit' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Favorite Fruit' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Set Favorite Fruit' })).toBeInTheDocument();

  });

  it ('(1 point) should render a "Home" navigation link to "/"', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    let link;
    expect(link = screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });

  it ('(1 point) should render an "Enter a Fruit" navigation link to "/fruits/new"', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    let link;
    expect(link = screen.getByRole('link', { name: 'Enter a Fruit' })).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/fruits/new');
  });

  it ('(1 point) should render a "Favorite Fruit" navigation link to "/fav-fruit"', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    let link;
    expect(link = screen.getByRole('link', { name: 'Favorite Fruit' })).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/fav-fruit');
  });
  it ('(1 point) should render a "Set Favorite Fruit" navigation link to "/set-fav-fruit"', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    let link;
    expect(link = screen.getByRole('link', { name: 'Set Favorite Fruit' })).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/set-fav-fruit');
  });

  it ('(1 point) Navigation is used by the App component', async () => {
    render(<App />);

    let fruitsLink, formLink, favoriteLink, setFavLink;
    expect(fruitsLink = screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(formLink = screen.getByRole('link', { name: 'Enter a Fruit' })).toBeInTheDocument();
    expect(favoriteLink = screen.getByRole('link', { name: 'Favorite Fruit' })).toBeInTheDocument();
    expect(setFavLink = screen.getByRole('link', { name: 'Set Favorite Fruit' })).toBeInTheDocument();

    // Check that each link is set to active when on its respective page
    const user = userEvent.setup();
    await user.click(fruitsLink);
    expect(document.getElementsByClassName('active')[0]).toEqual(fruitsLink);

    await user.click(formLink);
    expect(document.getElementsByClassName('active')[0]).toEqual(formLink);

    await user.click(favoriteLink);
    expect(document.getElementsByClassName('active')[0]).toEqual(favoriteLink);

    await user.click(setFavLink);
    expect(document.getElementsByClassName('active')[0]).toEqual(setFavLink);

  });
});

