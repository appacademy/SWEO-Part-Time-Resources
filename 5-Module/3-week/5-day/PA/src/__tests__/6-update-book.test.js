import { screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('06 - Update a Book', () => {
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

  describe('update an existing book into the Redux store from the UpdateBookForm', () => {
    it('should show the edit form book page with pre-populated data for "Book #1" when the link to "/books/1/edit" is clicked', async () => {
      act(() => {
        require("../index.js")
      });
      const link = screen.getAllByRole('link', { name: "Edit"})[0];
      userEvent.click(link);
      await waitFor(() => {
        expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><form><h2>Update Book</h2><label>Title<input type=\"text\" value=\"The Count of Monte Cristo\"></label><label>Author<textarea>Alexandre Dumas</textarea></label><input type=\"submit\" value=\"Update Book\"></form>");
      });

      const titleInput = screen.getByLabelText('Title');
      const authorInput = screen.getByLabelText('Author');
      expect(titleInput.value).toBe("The Count of Monte Cristo");
      expect(authorInput.value).toBe("Alexandre Dumas");
    });

    it('should update "Book #1" in the Redux store when UpdateBookForm is submitted on "/books/1/edit"', async () => {
      act(() => {
        require("../index.js")
      });
      const link = screen.getAllByRole('link', { name: "Edit"})[0];
      userEvent.click(link);
      await waitFor(() => {
        expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><form><h2>Update Book</h2><label>Title<input type=\"text\" value=\"The Count of Monte Cristo\"></label><label>Author<textarea>Alexandre Dumas</textarea></label><input type=\"submit\" value=\"Update Book\"></form>");
      });

      const titleInput = screen.getByLabelText('Title');
      const authorInput = screen.getByLabelText('Author');
      expect(titleInput.value).toBe("The Count of Monte Cristo");
      expect(authorInput.value).toBe("Alexandre Dumas");

      const titleValue = '5';
      const authorValue = '6';
      fireEvent.change(titleInput, { target: { value: titleValue } });
      expect(titleInput.value).toBe(titleValue);
      fireEvent.change(authorInput, { target: { value: authorValue } });
      expect(authorInput.value).toBe(authorValue);

      const submitBtn = screen.getByRole('button', { name: "Update Book"});
      userEvent.click(submitBtn);
      await waitFor(() => {
        expect(container.innerHTML).toMatch(new RegExp(`<h1>aA Lending Library</h1><section>ID: 1<br>Title: ${titleValue}<br>Author: ${authorValue}<br><button>Check Out</button><br><a href=\"/\">Back to Books List</a></section>`));
      });
    });
  });
});