import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('04 - Display a Book\'s Details', () => {
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

  describe('show a detailed book page when the link to "/books/:bookId" is clicked on the BookIndexItem', () => {
    it('should show the first book when the "Book #1" text link is clicked', async () => {
      act(() => {
        require("../index.js")
      });
      const link = screen.getByRole('link', { name: "Book #1"});
      userEvent.click(link);
      await waitFor(() => {
        expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section>ID: 1<br>Title: The Count of Monte Cristo<br>Author: Alexandre Dumas<br><button>Check Out</button><br><a href=\"/\">Back to Books List</a></section>");
      });
    });

    it('should show the fourth book when the "Book #4" text link is clicked', async () => {
      act(() => {
        require("../index.js")
      });
      const link = screen.getByRole('link', { name: "Book #4"});
      userEvent.click(link);
      await waitFor(() => {
        expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section>ID: 4<br>Title: Harry Potter and the Philosopher's Stone<br>Author: J.K. Rowling<br><button>Check Out</button><br><a href=\"/\">Back to Books List</a></section>");
      });
    });
  });

  // Start of CHALLENGE BONUS test specs

  // describe('check out the book when "Check Out" button is clicked on the BookShow', () => {
  //   it('should change the "Check Out" button to become a "Return" button when clicked', async () => {
  //     act(() => {
  //       require("../index.js")
  //     });
  //     const link = screen.getByRole('link', { name: "Book #1"});
  //     userEvent.click(link);
  //     await waitFor(() => {
  //       expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section>ID: 1<br>Title: The Count of Monte Cristo<br>Author: Alexandre Dumas<br><button>Check Out</button><br><a href=\"/\">Back to Books List</a></section>");
  //     });
  //     const checkOutButton = screen.getByRole('button', { name: "Check Out" });
  //     userEvent.click(checkOutButton);
  //     await screen.findByText('Return');
  //     expect(container.innerHTML).toBe("<h1>aA Lending Library</h1><section>ID: 1<br>Title: The Count of Monte Cristo<br>Author: Alexandre Dumas<br><button>Return</button><br><a href=\"/\">Back to Books List</a></section>");
  //   });
  // });

  // End of CHALLENGE BONUS test specs
});