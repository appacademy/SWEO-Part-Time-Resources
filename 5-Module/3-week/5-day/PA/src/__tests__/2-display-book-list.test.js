import { act } from 'react-dom/test-utils';

describe('02 - Display a List of Books', () => {
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

  describe('BookIndex', () => {
    it('should load all the books in the Redux store to align with how the books are being used to render the BookIndexItems', async () => {
      act(() => { require("../index.js") });
      expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section><ul><li><a href=\"/books/1\">Book #1</a><a href=\"/books/1/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/2\">Book #2</a><a href=\"/books/2/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/3\">Book #3</a><a href=\"/books/3/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/4\">Book #4</a><a href=\"/books/4/edit\">Edit</a><button>Delete</button></li><li><a href=\"/books/5\">Book #5</a><a href=\"/books/5/edit\">Edit</a><button>Delete</button></li></ul><a href=\"/books/new\">Add New Book</a><button>Reset Book Data</button></section>");
    });
  });
});
