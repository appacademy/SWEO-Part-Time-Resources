import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UseState from '../components/UseState';
import '@testing-library/jest-dom';

describe('BONUS: Theme Toggle in UseState component', () => {
  it('should toggle the theme when the "Toggle Theme" button is clicked', async () => {
    render(
      <UseState />
    );
    const toggleTheme = screen.getByRole('button', { name: "Toggle Theme"});
    const theme = screen.getByText('UseState Component').parentElement;
    userEvent.click(toggleTheme);
    await waitFor(() => expect(theme).toHaveClass('state', 'dark'));
    expect(theme).not.toHaveClass('light');
    userEvent.click(toggleTheme);
    await waitFor(() => expect(theme).not.toHaveClass('dark'));
    expect(theme).toHaveClass('state', 'light');
  });
});