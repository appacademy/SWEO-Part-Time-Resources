import { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';
import SetFavoriteFruit from '../components/SetFavoriteFruit';
import fruits from '../mockData/fruits.json';

const mockFn = vi.fn();

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
        initialEntries: ["/set-fav-fruit"]
      });
    },
    BrowserRouter: (props) => {
      return actual.MemoryRouter({...props, initialEntries: ["/set-fav-fruit"]});
    }
  }
});

describe('(6 points) SetFavoriteFruit', () => {
  it ('(3 points) should change the context\'s favFruitId', async () => {
    const setFavFruitId = mockFn;
    useContext.mockImplementation(() => ({
      favFruitId: "1",
      setFavFruitId
    }));

    render(<SetFavoriteFruit fruits={fruits} />);

    const banana = screen.getByRole('option', { name: /banana/i });
    const user = userEvent.setup();
    await user.selectOptions(screen.getByRole('combobox'), banana)
    expect(setFavFruitId).toHaveBeenCalledWith('2');
  });

  it ('(2 points) should initially select the fruit matching the context\'s favFruitId in the dropdown', () => {
    useContext.mockReturnValueOnce({
      favFruitId: "2", // banana
      setFavFruitId: mockFn
    }).mockReturnValueOnce({
      favFruitId: "1", // apple
      setFavFruitId: mockFn
    });

    const { rerender } = render(<SetFavoriteFruit fruits={fruits} />);
    const apple = screen.getByRole('option', { name: /apple/i });
    const banana = screen.getByRole('option', { name: /banana/i });
    expect(apple.selected).toBe(false);
    expect(banana.selected).toBe(true);

    rerender(<SetFavoriteFruit fruits={fruits} />);
    expect(apple.selected).toBe(true);
    expect(banana.selected).toBe(false);
  });

  it ('(1 points) should be invoked by the App component at the "/set-fav-fruit" route', async () => {
    useContext.mockImplementation(() => ({
      favFruitId: "1",
      setFavFruitId: mockFn
    }));

    render(<App />);
    expect(screen.getByRole('heading', { name: /Select your Favorite Fruit/i, level: 2 })).toBeInTheDocument();
  });
});

