import { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import FavoriteFruit from '../components/FavoriteFruit';
import fruits from '../mockData/fruits.json';

vi.mock("react", async () => {
  const actual = await vi.importActual("react");
  return {
    ...actual, // use actual React for everything but useContext
    useContext: vi.fn()
  };
});

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")
  return {
    ...actual, // use actual React Router for everything but createBrowserRouter
    createBrowserRouter: (routes) => {
      return actual.createMemoryRouter(routes, {
        initialEntries: ["/fav-fruit"]
      });
    },
    BrowserRouter: (props) => {
      return actual.MemoryRouter({...props, initialEntries: ["/fav-fruit"]});
    }
  }
});

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
    render(<App />);

    expect(screen.getByRole('heading', { name: "Favorite Fruit", level: 2 })).toBeInTheDocument();
  });
});

