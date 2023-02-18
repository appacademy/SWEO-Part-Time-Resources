import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('03 - Remove a Book', () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    container.id = "root";
    document.body.appendChild(container);
  });

  afterEach(() => {
    jest.resetModules();
    container.remove();
    container = null;
  });

  describe('remove a book when the "Delete" button is clicked on the BookIndexItem', () => {
    it('should remove the first book when the first book\'s "Delete" button is clicked', async () => {
      act(() => { require("../index.js") });
      expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section><ul><li><a href=\"/books/1\">Book #1</a><a href=\"/books/1/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/2\">Book #2</a><a href=\"/books/2/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/3\">Book #3</a><a href=\"/books/3/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/4\">Book #4</a><a href=\"/books/4/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/5\">Book #5</a><a href=\"/books/5/edit\">Edit</a><button>Delete</button></li></ul><a href=\"/books/new\">Add New Book</a><button>Reset Book Data</button></section>");
      const deleteBookBtn = screen.getAllByRole('button', { name: "Delete" })[0];
      userEvent.click(deleteBookBtn);
      await waitFor(() => {
        expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section><ul><li><a href=\"/books/2\">Book #2</a><a href=\"/books/2/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/3\">Book #3</a><a href=\"/books/3/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/4\">Book #4</a><a href=\"/books/4/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/5\">Book #5</a><a href=\"/books/5/edit\">Edit</a><button>Delete</button></li></ul><a href=\"/books/new\">Add New Book</a><button>Reset Book Data</button></section>");
      });
      // await expect(screen.findByText('Book #1')).rejects.toThrow();
    });

    it('should remove the fourth book when the fourth book\'s "Delete" button is clicked', async () => {
      act(() => { require("../index.js") });
      expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section><ul><li><a href=\"/books/1\">Book #1</a><a href=\"/books/1/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/2\">Book #2</a><a href=\"/books/2/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/3\">Book #3</a><a href=\"/books/3/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/4\">Book #4</a><a href=\"/books/4/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/5\">Book #5</a><a href=\"/books/5/edit\">Edit</a><button>Delete</button></li></ul><a href=\"/books/new\">Add New Book</a><button>Reset Book Data</button></section>");
      const deleteBookBtn = screen.getAllByRole('button', { name: "Delete" })[3];
      userEvent.click(deleteBookBtn);
      await waitFor(() => {
        expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section><ul><li><a href=\"/books/1\">Book #1</a><a href=\"/books/1/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/2\">Book #2</a><a href=\"/books/2/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/3\">Book #3</a><a href=\"/books/3/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/5\">Book #5</a><a href=\"/books/5/edit\">Edit</a><button>Delete</button></li></ul><a href=\"/books/new\">Add New Book</a><button>Reset Book Data</button></section>");
      });
    });
  });
});