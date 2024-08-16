import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useParams } from 'react-router-dom';
import App from '../App';
import FruitShow from '../components/FruitShow';
import fruits from '../mockData/fruits.json';

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")
  return {
    ...actual, // use actual React Router for everything but createBrowserRouter
    useParams: vi.fn(),
    createBrowserRouter: (routes) => {
      return actual.createMemoryRouter(routes, {
        initialEntries: ["/fruits/1"]
      });
    },
    BrowserRouter: (props) => {
      return actual.MemoryRouter({...props, initialEntries: ["/fruits/1"]});
    }
  }
});

describe('(9 points) FruitShow', () => {
  beforeEach(() => {
    useParams.mockImplementation(() => ({ fruitId: "1" }));
  });

  it ('(2 points) should render an h2 with the name of the fruit', () => {
    const { rerender } = render(<FruitShow fruits={fruits} />);
    expect(screen.getByRole('heading', { name: 'Apple', level: 2 })).toBeInTheDocument();

    useParams.mockReturnValueOnce({ fruitId: "2" });
    rerender(<FruitShow fruits={fruits} />);
    expect(screen.getByRole('heading', { name: 'Banana', level: 2 })).toBeInTheDocument();
  });

  it ('(2 points) should render the color of the fruit', () => {
    const { rerender } = render(<FruitShow fruits={fruits} />);
    expect(screen.getByText(/red/i)).toBeInTheDocument();
    expect(screen.queryByText(/yellow/i)).not.toBeInTheDocument();

    useParams.mockReturnValueOnce({ fruitId: "2" });
    rerender(<FruitShow fruits={fruits} />);
    expect(screen.getByText(/yellow/i)).toBeInTheDocument();
    expect(screen.queryByText(/red/i)).not.toBeInTheDocument();
  });

  it ('(2 point) should render the sweetness of the fruit', () => {
    const { rerender } = render(<FruitShow fruits={fruits} />);
    expect(screen.getByText(/Sweetness: 6/i)).toBeInTheDocument();
    expect(screen.queryByText(/Sweetness: 4/i)).not.toBeInTheDocument();

    useParams.mockReturnValueOnce({ fruitId: "2" });
    rerender(<FruitShow fruits={fruits} />);
    expect(screen.getByText(/Sweetness: 4/i)).toBeInTheDocument();
    expect(screen.queryByText(/Sweetness: 6/i)).not.toBeInTheDocument();
  });

  it ('(2 points) should render whether or not the fruit has seeds', () => {
    const { rerender } = render(<FruitShow fruits={fruits} />);
    expect(screen.getByText(/Seeds: yes/i)).toBeInTheDocument();
    expect(screen.queryByText(/Seeds: no/i)).not.toBeInTheDocument();

    useParams.mockReturnValueOnce({ fruitId: "2" });
    rerender(<FruitShow fruits={fruits} />);
    expect(screen.getByText(/Seeds: no/i)).toBeInTheDocument();
    expect(screen.queryByText(/Seeds: yes/i)).not.toBeInTheDocument();
  });

  it ('(1 point) FruitShow is used by the App component', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Apple', level: 2 })).toBeInTheDocument();
  });
});
