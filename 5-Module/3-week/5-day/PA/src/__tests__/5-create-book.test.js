import { screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('05 - Create a Book', () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    container.id = "root";
    document.body.appendChild(container);
    jest.mock('react-router-dom', () => {
      // Require the original module to not be mocked...
      const originalModule = jest.requireActual('react-router-dom');
      return {
        __esModule: true,
        ...originalModule,
        BrowserRouter: originalModule.MemoryRouter,
      };
    });
  });

  afterEach(() => {
    jest.resetModules();
    container.remove();
    container = null;
  });

  describe('inserts a new book into the Redux store from the CreateBookForm', () => {
    it('should insert the new book into the Redux store when CreateBookForm is submitted', async () => {
      act(() => {
        require("../index.js")
      });
      const link = screen.getByRole('link', { name: "Add New Book"});
      userEvent.click(link);
      await waitFor(() => {
        expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><form><h2>Create Book</h2><label>Title<input type=\"text\" value=\"\"></label><label>Author<textarea></textarea></label><input type=\"submit\" value=\"Create Book\"></form>");
      });

      const titleInput = screen.getByLabelText('Title');
      const authorInput = screen.getByLabelText('Author');
      expect(titleInput.value).toBe('');
      expect(authorInput.value).toBe('');

      const titleValue = '3';
      const authorValue = '4';
      fireEvent.change(titleInput, { target: { value: titleValue } });
      expect(titleInput.value).toBe(titleValue);
      fireEvent.change(authorInput, { target: { value: authorValue } });
      expect(authorInput.value).toBe(authorValue);

      const submitBtn = screen.getByRole('button', { name: "Create Book"});
      userEvent.click(submitBtn);
      await waitFor(() => {
        expect(container.innerHTML).toMatch(new RegExp(`<h1>aA Lending Library</h1><section>ID: .{5}<br>Title: ${titleValue}<br>Author: ${authorValue}<br><button>Check Out</button><br><a href=\"/\">Back to Books List</a></section>`));
      });
    });
  });
});