import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createBrowserRouter, createMemoryRouter,
         BrowserRouter, MemoryRouter } from 'react-router-dom';
import FruitsIndex from '../components/FruitsIndex';
import FruitShow from '../components/FruitShow';
import FruitForm from '../components/FruitForm';
import FavoriteFruit from '../components/FavoriteFruit';
import SetFavoriteFruit from '../components/SetFavoriteFruit';
import fruits from '../mockData/fruits.json';

vi.mock('../components/Navigation', () => {
  return {
    default: vi.fn(() => <>Nav Bar</>)
  }
});
vi.mock('../components/FruitsIndex', () => {
  return {
    default: vi.fn(() => <>Fruits Index</>)
  }
});
vi.mock('../components/FruitShow', () => {
  return {
    default: vi.fn(() => <>Fruit Show</>)
  }
});
vi.mock('../components/FruitForm', () => {
  return {
    default: vi.fn(() => <>Fruit Form</>)
  }
});
vi.mock('../components/FavoriteFruit', () => {
  return {
    default: vi.fn(() => <>My Favorite Fruit</>)
  }
});
vi.mock('../components/SetFavoriteFruit', () => {
  return {
    default: vi.fn(() => <>Set Favorite Fruit</>)
  }
});

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual, // use actual React Router for everything but createBrowserRouter
    createBrowserRouter: vi.fn(),
    BrowserRouter: vi.fn()
  }
});

const initializeRouter = async (path) => {
  vi.resetModules();
  createBrowserRouter.mockImplementation((routes) => {
    return createMemoryRouter(routes, {
      initialEntries: [path]
    });
  });
  BrowserRouter.mockImplementation((props) => {
    return MemoryRouter({...props, initialEntries: [path]});
  });
  return (await import("../App")).default
}

describe('(7 points) Routes', () => {
  test ('(1 point) Navigation should render on every page', async () => {
    let App = await initializeRouter("/");
    const { rerender } = render(<App />);
    expect(screen.getByText(/Nav Bar/)).toBeInTheDocument();

    App = await initializeRouter("/fruits/1");
    rerender(<App />);
    expect(screen.getByText(/Nav Bar/)).toBeInTheDocument();

    App = await initializeRouter("/fruits/new");
    rerender(<App />);
    expect(screen.getByText(/Nav Bar/)).toBeInTheDocument();

    App = await initializeRouter("/fav-fruit");
    rerender(<App />);
    expect(screen.getByText(/Nav Bar/)).toBeInTheDocument();

    App = await initializeRouter("/set-fav-fruit");
    rerender(<App />);
    expect(screen.getByText(/Nav Bar/)).toBeInTheDocument();

    App = await initializeRouter("/invalid-page");
    rerender(<App />);
    expect(screen.getByText(/Nav Bar/)).toBeInTheDocument();
  });

  test ('(1 point) FruitsIndex should render at the path of "/"', async () => {
    const App = await initializeRouter("/");
    render(<App />);

    expect(FruitsIndex).toHaveBeenCalledWith(expect.objectContaining({ fruits }), {});
    expect(screen.getByText(/Fruits Index/)).toBeInTheDocument();

    expect(screen.queryByText(/Fruit Form/)).not.toBeInTheDocument();
    expect(screen.queryByText(/My Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Set Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Show/)).not.toBeInTheDocument();
    expect(screen.queryByText(/page not found/i)).not.toBeInTheDocument();
  });

  test ('(1 point) FruitShow should render at the path of "/fruits/:fruitId"', async () => {
    const App = await initializeRouter("/fruits/1");
    render(<App />);

    expect(FruitShow).toHaveBeenCalledWith(expect.objectContaining({ fruits }), {});
    expect(screen.getByText(/Fruit Show/)).toBeInTheDocument();

    expect(screen.queryByText(/Fruits Index/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Form/)).not.toBeInTheDocument();
    expect(screen.queryByText(/My Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Set Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/page not found/i)).not.toBeInTheDocument();
  });

  test ('(1 point) FruitForm should render at the path of "/fruits/new"', async () => {
    const App = await initializeRouter("/fruits/new");
    render(<App />);

    expect(FruitForm).toHaveBeenCalledWith(expect.objectContaining({ fruits }), {});
    expect(screen.getByText(/Fruit Form/)).toBeInTheDocument();

    expect(screen.queryByText(/Fruits Index/)).not.toBeInTheDocument();
    expect(screen.queryByText(/My Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Set Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Show/)).not.toBeInTheDocument();
    expect(screen.queryByText(/page not found/i)).not.toBeInTheDocument();
  });

  test ('(1 point) FavoriteFruit should render at the path of "/fav-fruit"', async () => {
    const App = await initializeRouter("/fav-fruit");
    render(<App />);

    expect(FavoriteFruit).toHaveBeenCalledWith(expect.objectContaining({ fruits }), {});
    expect(screen.getByText(/My Favorite Fruit/)).toBeInTheDocument();

    expect(screen.queryByText(/Fruits Index/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Form/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Set Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Show/)).not.toBeInTheDocument();
    expect(screen.queryByText(/page not found/i)).not.toBeInTheDocument();
  });

  test ('(1 point) SetFavoriteFruit should render at the path of "/set-fav-fruit"', async () => {
    const App = await initializeRouter("/set-fav-fruit");
    render(<App />);

    expect(SetFavoriteFruit).toHaveBeenCalledWith(expect.objectContaining({ fruits }), {});
    expect(screen.getByText(/Set Favorite Fruit/)).toBeInTheDocument();

    expect(screen.queryByText(/Fruits Index/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Form/)).not.toBeInTheDocument();
    expect(screen.queryByText(/My Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Show/)).not.toBeInTheDocument();
    expect(screen.queryByText(/page not found/i)).not.toBeInTheDocument();
  });

  test ('(1 point) "Page Not Found" should render at all other paths', async () => {
    let randomUrl = 'q';
    while (randomUrl.length < 10) {
      randomUrl += 'abcdefghijklmnopqrstuvwxyz'.charAt(Math.random() * 26);
    }

    const App = await initializeRouter("/${randomUrl}");
    render(<App />);

    expect(screen.getByText(/page not found/i)).toBeInTheDocument();

    expect(screen.queryByText(/Fruits Index/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Form/)).not.toBeInTheDocument();
    expect(screen.queryByText(/My Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Set Favorite Fruit/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fruit Show/)).not.toBeInTheDocument();
  });
});
