/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import '../setupTests';
import userEvent from '@testing-library/user-event';
import { act, render, screen, waitFor } from '@testing-library/react';

import Cat from '../Cat';

describe('Cat component - background color', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should change color to the next color every 5 seconds', async () => {
    const { container } = render(<Cat />);

    const backgroundDiv = container.querySelector('.cat-container');
    expect(backgroundDiv).toHaveStyle('background-color: red');

    act(() => jest.advanceTimersByTime(5000));
    expect(backgroundDiv).toHaveStyle('background-color: purple');

    act(() => jest.advanceTimersByTime(5000));
    expect(backgroundDiv).toHaveStyle('background-color: green');

    act(() => jest.advanceTimersByTime(5000));
    expect(backgroundDiv).toHaveStyle('background-color: orange');

    act(() => jest.advanceTimersByTime(5000));
    expect(backgroundDiv).toHaveStyle('background-color: blue');
  });

  it('should reset the color to "red" after it changes its color 5 times', async () => {
    const { container } = render(<Cat />);

    const backgroundDiv = container.querySelector('.cat-container');
    expect(backgroundDiv).toHaveStyle('background-color: red');

    act(() => jest.advanceTimersByTime(5000));
    act(() => jest.advanceTimersByTime(5000));
    act(() => jest.advanceTimersByTime(5000));
    act(() => jest.advanceTimersByTime(5000));
    act(() => jest.advanceTimersByTime(5000));
    expect(backgroundDiv).toHaveStyle('background-color: red');
    act(() => jest.advanceTimersByTime(5000));
    expect(backgroundDiv).toHaveStyle('background-color: purple');
  });

  it('should change color to the next color every 2 seconds after the user submits a new delay of "2" seconds' , async () => {
    const user = userEvent.setup();
    const { container } = render(<Cat />);

    const backgroundDiv = container.querySelector('.cat-container');
    expect(backgroundDiv).toHaveStyle('background: red');

    const changeDelayInput = screen.getByPlaceholderText('delay in seconds');
    const submitButton = screen.getByRole('button', { name: 'Change Delay' });

    user.clear(changeDelayInput);
    await waitFor(() => expect(changeDelayInput).not.toHaveValue());
    user.type(changeDelayInput, "2");
    await waitFor(() => expect(changeDelayInput).toHaveValue(2));
    user.click(submitButton);
    await waitFor(() => expect(changeDelayInput).not.toHaveValue());

    act(() => jest.advanceTimersByTime(2000));
    await waitFor(() => expect(backgroundDiv).toHaveStyle('background-color: purple'));

    act(() => jest.advanceTimersByTime(2000));
    await waitFor(() => expect(backgroundDiv).toHaveStyle('background-color: green'));
  });

  it('should be able to change the amount of time between color after the user submits any new delay between 1 and 10 secs' , async () => {
    const user = userEvent.setup();
    const { container } = render(<Cat />);

    const backgroundDiv = container.querySelector('.cat-container');
    expect(backgroundDiv).toHaveStyle('background: red');

    const changeDelayInput = screen.getByPlaceholderText('delay in seconds');
    const submitButton = screen.getByRole('button', { name: 'Change Delay' });

    user.clear(changeDelayInput);
    await waitFor(() => expect(changeDelayInput).not.toHaveValue());
    user.type(changeDelayInput, "2");
    await waitFor(() => expect(changeDelayInput).toHaveValue(2));
    user.click(submitButton);
    await waitFor(() => expect(changeDelayInput).not.toHaveValue());

    act(() => jest.advanceTimersByTime(2000));
    await waitFor(() => expect(backgroundDiv).toHaveStyle('background-color: purple'));

    act(() => jest.advanceTimersByTime(2000));
    await waitFor(() => expect(backgroundDiv).toHaveStyle('background-color: green'));

    user.clear(changeDelayInput);
    await waitFor(() => expect(changeDelayInput).not.toHaveValue());
    user.type(changeDelayInput, "8");
    await waitFor(() => expect(changeDelayInput).toHaveValue(8));
    user.click(submitButton);
    await waitFor(() => expect(changeDelayInput).not.toHaveValue());

    act(() => jest.advanceTimersByTime(2000));
    expect(backgroundDiv).toHaveStyle('background-color: green');
    act(() => jest.advanceTimersByTime(6000));
    await waitFor(() => expect(backgroundDiv).toHaveStyle('background-color: orange'));

    user.clear(changeDelayInput);
    await waitFor(() => expect(changeDelayInput).not.toHaveValue());
    user.type(changeDelayInput, "6");
    await waitFor(() => expect(changeDelayInput).toHaveValue(6));
    user.click(submitButton);
    await waitFor(() => expect(changeDelayInput).not.toHaveValue());

    act(() => jest.advanceTimersByTime(6000));
    expect(backgroundDiv).toHaveStyle('background-color: blue');

    user.clear(changeDelayInput);
    await waitFor(() => expect(changeDelayInput).not.toHaveValue());
    user.type(changeDelayInput, "10");
    await waitFor(() => expect(changeDelayInput).toHaveValue(10));
    user.click(submitButton);
    await waitFor(() => expect(changeDelayInput).not.toHaveValue());

    act(() => jest.advanceTimersByTime(8000));
    expect(backgroundDiv).toHaveStyle('background-color: blue');
    act(() => jest.advanceTimersByTime(2000));
    expect(backgroundDiv).toHaveStyle('background-color: red');
  });
});