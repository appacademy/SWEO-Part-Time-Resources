import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router-dom";
import App from '../App';
import FavoriteFruit from '../components/FavoriteFruit';
import { useContext } from 'react';

import fruits from "../mockData/fruits.json";

jest.mock('react', () => ({
  ...jest.requireActual('react'), // use actual React for all except useContext
  useContext: jest.fn()
}));

describe('(7 points) FavoriteFruit', () => {
  beforeEach(() => {
    useContext.mockImplementation(() => ({
      favFruitId: "1",
      setFavoriteFruitId: () => {}
    }));
  });

  it ('(1 point) should render an h2 with the text "Favorite Fruit"', () => {
    render(
      <MemoryRouter>
        <FavoriteFruit fruits={fruits} />
      </MemoryRouter>
    );
  
    expect(screen.getByRole('heading', { name: "Favorite Fruit", level: 2 })).toBeInTheDocument();
  });
  
  it ('(5 points) should render a link to the fruit matched to the context\'s favFruitId', () => {
    const { rerender } = render(
      <MemoryRouter>
        <FavoriteFruit fruits={fruits} />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: fruits[0].name })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: fruits[1].name })).not.toBeInTheDocument();
  
    useContext.mockReturnValueOnce({
      favFruitId: "2",
      setFavoriteFruitId: () => {}
    });

    rerender(
      <MemoryRouter>
        <FavoriteFruit fruits={fruits} />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: fruits[1].name })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: fruits[0].name })).not.toBeInTheDocument();
  });
  
  it ('(1 point) should be invoked by the App component at the "/fav-fruit" route', () => {
    render(
      <MemoryRouter initialEntries={['/fav-fruit']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: "Favorite Fruit", level: 2 })).toBeInTheDocument();
  });
});

