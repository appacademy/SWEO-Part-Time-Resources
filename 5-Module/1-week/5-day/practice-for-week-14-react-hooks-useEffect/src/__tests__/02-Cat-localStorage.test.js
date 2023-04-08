import '../setupTests';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

import Cat from '../Cat';

describe('Cat component - localStorage', () => {
  const getItemSpy = jest.spyOn(global.Storage.prototype, 'getItem');
  const setItemSpy = jest.spyOn(global.Storage.prototype, 'setItem');

  afterEach(() => {
    getItemSpy.mockReset();
    setItemSpy.mockReset();
  });

  it('should store the cat status initial value of "418" in localStorage if there is no stored cat status in localStorage', async () => {
    getItemSpy.mockImplementation(() => null);
    render(<Cat />);

    await waitFor(() => expect(getItemSpy).toHaveBeenCalled());
    expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(/418$/));
    expect(setItemSpy).toHaveBeenLastCalledWith(expect.anything(), expect.toBeOneOf([418, "418"]));
  });

  it('should show an initial cat status of "420" if the stored cat status in localStorage is "420"', async () => {
    getItemSpy.mockImplementation(() => '420');
    render(<Cat />);

    await waitFor(() => expect(getItemSpy).toHaveBeenCalled());
    await waitFor(() => expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(/420$/)));
  });

  it('should show and store a new cat status in localStorage after the user submits a new status code', async () => {
    getItemSpy.mockImplementation(() => null);
    const user = userEvent.setup();
    render(<Cat />);

    const changeStatusInput = screen.getByPlaceholderText('find new status');
    const submitButton = screen.getByRole('button', {
      name: 'Change Status',
    });

    user.clear(changeStatusInput);
    await waitFor(() => expect(changeStatusInput).not.toHaveValue());
    user.type(changeStatusInput, "599");
    await waitFor(() => expect(changeStatusInput).toHaveValue(599));
    user.click(submitButton);
    await waitFor(() => expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(/599$/)));
    expect(setItemSpy).toHaveBeenLastCalledWith(expect.anything(), expect.toBeOneOf([599, "599"]));

    user.clear(changeStatusInput);
    await waitFor(() => expect(changeStatusInput).not.toHaveValue());
    user.type(changeStatusInput, "200");
    await waitFor(() => expect(changeStatusInput).toHaveValue(200));
    user.click(submitButton);
    await waitFor(() => expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(/200$/)));
    expect(setItemSpy).toHaveBeenLastCalledWith(expect.anything(), expect.toBeOneOf([200, "200"]));
  });
});
