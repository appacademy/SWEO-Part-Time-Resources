import configureStore from '../store';
import { act } from 'react-dom/test-utils';

describe('01 - Setup Redux', () => {
  describe('configureStore', () => {
    it('should be a function that returns a Redux store', () => {
      expect(typeof configureStore).toEqual('function');
      const store = configureStore();
      expect(store).toHaveProperty('dispatch');
      expect(store).toHaveProperty('getState');
      expect(store).toHaveProperty('subscribe');
    });
  });

  describe('initial Redux store state', () => {
    it('should load the Redux store state with the initial books', () => {
      const store = configureStore();
      expect(store.getState()).toEqual({
        books: {
          "1": {
            "id": "1",
            "title": "The Count of Monte Cristo",
            "author": "Alexandre Dumas",
            "checkedOut": false
          },
          "2": {
            "id": "2",
            "title": "The Eyre Affair",
            "author": "Jasper Fforde",
            "checkedOut": false
          },
          "3": {
            "id": "3",
            "title": "Byzantium",
            "author": "Stephen Lawhead",
            "checkedOut": false
          },
          "4": {
            "id": "4",
            "title": "Harry Potter and the Philosopher's Stone",
            "author": "J.K. Rowling",
            "checkedOut": false
          },
          "5": {
            "id": "5",
            "title": "The Fellowship of the Ring",
            "author": "J. R. R. Tolkien",
            "checkedOut": false
          }
        }
      })
    });
  });

  describe('React application is connected to Redux', () => {
    it('should provide the Redux store to the whole React application', () => {
      const div = document.createElement("div");
      div.id = "root";
      document.body.appendChild(div);
      jest.mock("../App", () => {
        const { useContext } = jest.requireActual('react');
        const { ReactReduxContext } = jest.requireActual('react-redux');
        return function JestApp(props) {
          const { store } = useContext(ReactReduxContext);
          return (
            <>
              {JSON.stringify(store.getState())}
            </>
          );
        };
      });
      act(() => { require("../index.js") });
      expect(div.textContent).toBe(JSON.stringify({
        books: {
          "1": {
            "id": "1",
            "title": "The Count of Monte Cristo",
            "author": "Alexandre Dumas",
            "checkedOut": false
          },
          "2": {
            "id": "2",
            "title": "The Eyre Affair",
            "author": "Jasper Fforde",
            "checkedOut": false
          },
          "3": {
            "id": "3",
            "title": "Byzantium",
            "author": "Stephen Lawhead",
            "checkedOut": false
          },
          "4": {
            "id": "4",
            "title": "Harry Potter and the Philosopher's Stone",
            "author": "J.K. Rowling",
            "checkedOut": false
          },
          "5": {
            "id": "5",
            "title": "The Fellowship of the Ring",
            "author": "J. R. R. Tolkien",
            "checkedOut": false
          }
        }
      }));
    });
  });
});