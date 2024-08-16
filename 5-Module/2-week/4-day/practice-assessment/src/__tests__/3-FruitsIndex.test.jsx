import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import FruitsIndex from '../components/FruitsIndex';
import fruits from '../mockData/fruits.json';

describe('(7 points) FruitsIndex', () => {
  it ('(1 point) should render an h2 with the text "Fruits Index"', () => {
    render(
      <MemoryRouter>
        <FruitsIndex fruits={fruits} />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'Fruits Index', level: 2 })).toBeInTheDocument();
  });

  it ('(5 points) should render a list of fruits from the mockData', () => {
    render(
      <MemoryRouter>
        <FruitsIndex fruits={fruits} />
      </MemoryRouter>
    );

    expect(screen.getAllByRole('link')).toHaveLength(fruits.length);

    let fruitLink;
    fruits.forEach(fruit => {
      expect(fruitLink = screen.getByRole('link', { name: fruit.name })).toBeInTheDocument();
      expect(fruitLink).toHaveAttribute('href', `/fruits/${fruit.id}`);
    });
  });

  it ('(1 point) should be invoked by the App component at the "/" route', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Fruits Index', level: 2 })).toBeInTheDocument();
  });
});

