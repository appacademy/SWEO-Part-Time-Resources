import '../setupTests';
import userEvent from '@testing-library/user-event';
import { act, render, screen, waitFor } from '@testing-library/react';

import Cat from '../Cat';

describe('BONUS: Cat component - reset cat status after 10 minutes of inactivity', () => {
  const getItemSpy = jest.spyOn(global.Storage.prototype, 'getItem');
  const setItemSpy = jest.spyOn(global.Storage.prototype, 'setItem');

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    getItemSpy.mockReset();
    setItemSpy.mockReset();
  });

  it('should reset the cat status to "418" if user has not updated the cat status at all', async () => {
    getItemSpy.mockImplementation(() => '420');
    render(<Cat />);

    await waitFor(() => expect(getItemSpy).toHaveBeenCalled());
    await waitFor(() => expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(/420$/)));

    act(() => jest.advanceTimersByTime(600000 - 10));
    expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(/420$/));
    act(() => jest.advanceTimersByTime(10));
    await waitFor(() => expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(/418$/)));
    expect(setItemSpy).toHaveBeenLastCalledWith(expect.anything(), expect.toBeOneOf([418, "418"]));
  });

  it('should show an initial cat status of "420" if the stored cat status in localStorage is "420"', async () => {
    getItemSpy.mockImplementation(() => '420');
    const user = userEvent.setup();
    render(<Cat />);

    await waitFor(() => expect(getItemSpy).toHaveBeenCalled());
    await waitFor(() => expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(/420$/)));
    
    const changeStatusInput = screen.getByPlaceholderText('find new status');
    const submitButton = screen.getByRole('button', {
      name: 'Change Status',
    });

    act(() => jest.advanceTimersByTime(10000));
    user.clear(changeStatusInput);
    await waitFor(() => expect(changeStatusInput).not.toHaveValue());
    user.type(changeStatusInput, "599");
    await waitFor(() => expect(changeStatusInput).toHaveValue(599));
    user.click(submitButton);
    await waitFor(() => expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(/599$/)));
    expect(setItemSpy).toHaveBeenLastCalledWith(expect.anything(), expect.toBeOneOf([599, "599"]));

    act(() => jest.advanceTimersByTime(600000 - 10));
    expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(/599$/));
    act(() => jest.advanceTimersByTime(10));
    await waitFor(() => expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(/418$/)));
    expect(setItemSpy).toHaveBeenLastCalledWith(expect.anything(), expect.toBeOneOf([418, "418"]));
  });
});