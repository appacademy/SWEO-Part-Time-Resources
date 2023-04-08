import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UseState from '../components/UseState';
import '@testing-library/jest-dom';

describe('Counter in UseState component', () => {
  it('should display an initial counter of 0', async () => {
    render(
      <UseState />
    );
    expect(screen.getByText(/0/)).toBeInTheDocument();
  });

  it('should increment the counter when the "Increment" button is clicked', async () => {
    render(
      <UseState />
    );
    const increment = screen.getByRole('button', { name: "Increment"});
    expect(screen.getByText(/0/)).toBeInTheDocument();
    expect(screen.queryByText(/1/)).not.toBeInTheDocument();
    userEvent.click(increment);
    expect(await screen.findByText(/1/)).toBeInTheDocument();
    expect(screen.queryByText(/0/)).not.toBeInTheDocument();
    expect(screen.queryByText(/-1/)).not.toBeInTheDocument();
    expect(screen.queryByText(/2/)).not.toBeInTheDocument();
    userEvent.click(increment);
    expect(await screen.findByText(/2/)).toBeInTheDocument();
    expect(screen.queryByText(/0/)).not.toBeInTheDocument();
    expect(screen.queryByText(/1/)).not.toBeInTheDocument();
  });

  it('should decrement the counter when the "Decrement" button is clicked', async () => {
    render(
      <UseState />
    );
    const decrement = screen.getByRole('button', { name: "Decrement"});
    expect(screen.getByText(/0/)).toBeInTheDocument();
    expect(screen.queryByText(/-1/)).not.toBeInTheDocument();
    userEvent.click(decrement);
    expect(await screen.findByText(/-1/)).toBeInTheDocument();
    expect(screen.queryByText(/0/)).not.toBeInTheDocument();
    expect(screen.queryByText(/-2/)).not.toBeInTheDocument();
    userEvent.click(decrement);
    expect(await screen.findByText(/-2/)).toBeInTheDocument();
    expect(screen.queryByText(/0/)).not.toBeInTheDocument();
    expect(screen.queryByText(/-1/)).not.toBeInTheDocument();
  });
});
