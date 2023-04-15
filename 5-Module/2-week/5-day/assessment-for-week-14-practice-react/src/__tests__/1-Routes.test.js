import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Router, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from 'history';
import App from '../App';
import FruitsIndex from '../components/FruitsIndex';
import FruitShow from '../components/FruitShow';
import FruitForm from '../components/FruitForm';
import FavoriteFruit from '../components/FavoriteFruit';
import SetFavoriteFruit from '../components/SetFavoriteFruit';
import fruits from "../mockData/fruits.json";

jest.mock('../components/Navigation', () => (() => 'Nav Bar\n'));
jest.mock('../components/FruitsIndex', () => jest.fn());
jest.mock('../components/FruitShow', () => jest.fn());
jest.mock('../components/FruitForm', () => jest.fn());
jest.mock('../components/FavoriteFruit', () => jest.fn());
jest.mock('../components/SetFavoriteFruit', () => jest.fn());

describe('(7 points) Routes', () => {
  test ('(1 point) Navigation should render on every page', () => {
    FruitsIndex.mockImplementation(() => 'Fruits Index');
    const history = createMemoryHistory();
    const { rerender } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(screen.getByText(/Nav Bar/)).toBeInTheDocument();

    FruitForm.mockImplementation(() => 'Fruits Form');
    history.push('/fruits/new')
    rerender(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(screen.getByText(/Nav Bar/)).toBeInTheDocument();
  });

  test ('(1 point) FruitsIndex should render at the path of "/" exactly', () => {
    FruitsIndex.mockImplementation(() => 'Fruits Index');
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(FruitsIndex).toHaveBeenCalledWith(expect.objectContaining({ fruits }), {});
    expect(screen.getByText(/Fruits Index/)).toBeInTheDocument();
    expect(screen.getByText(/Nav Bar/)).toBeInTheDocument();

    expect(screen.queryByText(/Fruit Form/)).not.toBeInTheDocument();
    expect(screen.queryByText(/My Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Set Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Show/)).not.toBeInTheDocument();
    expect(screen.queryByText(/page not found/i)).not.toBeInTheDocument();
  });
  
  test ('(1 point) FruitShow should render at the path of "/fruits/:fruitId"', () => {
    FruitShow.mockImplementation(() => 'Fruit Show');
    render(
      <MemoryRouter initialEntries={['/fruits/1']}>
        <App />
      </MemoryRouter>
    );

    expect(FruitShow).toHaveBeenCalledWith(expect.objectContaining({ fruits }), {});
    expect(screen.getByText(/Fruit Show/)).toBeInTheDocument();
    expect(screen.getByText(/Nav Bar/)).toBeInTheDocument();

    expect(screen.queryByText(/Fruits Index/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Form/)).not.toBeInTheDocument();
    expect(screen.queryByText(/My Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Set Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/page not found/i)).not.toBeInTheDocument();
  });

  test ('(1 point) FruitForm should render at the path of "/fruits/new"', () => {
    FruitForm.mockImplementation(() => 'Fruit Form');
    render(
      <MemoryRouter initialEntries={['/fruits/new']}>
        <App />
      </MemoryRouter>
    );

    expect(FruitForm).toHaveBeenCalledWith(expect.objectContaining({ fruits }), {});
    expect(screen.getByText(/Fruit Form/)).toBeInTheDocument();
    expect(screen.getByText(/Nav Bar/)).toBeInTheDocument();

    expect(screen.queryByText(/Fruits Index/)).not.toBeInTheDocument();
    expect(screen.queryByText(/My Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Set Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Show/)).not.toBeInTheDocument();
    expect(screen.queryByText(/page not found/i)).not.toBeInTheDocument();
  });
  
  test ('(1 point) FavoriteFruit should render at the path of "/fav-fruit"', () => {
    FavoriteFruit.mockImplementation(() => 'My Favorite Fruit');
    render(
      <MemoryRouter initialEntries={['/fav-fruit']}>
        <App />
      </MemoryRouter>
    );

    expect(FavoriteFruit).toHaveBeenCalledWith(expect.objectContaining({ fruits }), {});
    expect(screen.getByText(/My Favorite Fruit/)).toBeInTheDocument();
    expect(screen.getByText(/Nav Bar/)).toBeInTheDocument();

    expect(screen.queryByText(/Fruits Index/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Form/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Set Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Show/)).not.toBeInTheDocument();
    expect(screen.queryByText(/page not found/i)).not.toBeInTheDocument();
  });
  
  test ('(1 point) SetFavoriteFruit should render at the path of "/set-fav-fruit"', () => {
    SetFavoriteFruit.mockImplementation(() => 'Set Favorite Fruit');
    render(
      <MemoryRouter initialEntries={['/set-fav-fruit']}>
        <App />
      </MemoryRouter>
    );

    expect(SetFavoriteFruit).toHaveBeenCalledWith(expect.objectContaining({ fruits }), {});
    expect(screen.getByText(/Set Favorite Fruit/)).toBeInTheDocument();
    expect(screen.getByText(/Nav Bar/)).toBeInTheDocument();

    expect(screen.queryByText(/Fruits Index/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Form/)).not.toBeInTheDocument();
    expect(screen.queryByText(/My Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Show/)).not.toBeInTheDocument();
    expect(screen.queryByText(/page not found/i)).not.toBeInTheDocument();
  });
  
  test ('(1 point) "Page Not Found" should render at all other paths', () => {
    let randomUrl = 'q';
    while (randomUrl.length < 10) {
      randomUrl += 'abcdefghijklmnopqrstuvwxyz'.charAt(Math.random() * 26);
    }
    
    render(
      <MemoryRouter initialEntries={[`/${randomUrl}`]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Nav Bar/)).toBeInTheDocument();

    expect(screen.queryByText(/Fruits Index/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Form/)).not.toBeInTheDocument();
    expect(screen.queryByText(/My Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Set Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Show/)).not.toBeInTheDocument();
  });
});
