import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../App';
import SetFavoriteFruit from '../components/SetFavoriteFruit';
import FavFruitProvider from '../context/FavFruitContext';

import fruits from "../mockData/fruits.json";
import { useContext } from 'react';

const mockFn = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'), // use actual for all non-hook parts
  useContext: jest.fn()
}));

describe('(7 points) SetFavoriteFruit', () => {
  test ('(1 points) SetFavoriteFruit renders a div with a class of "set-fav-fruit"', () => {
    useContext.mockImplementation(() => ({
      favFruitId: "1",
      setFavFruitId: mockFn,
    }));
    const setFavFruit = mount(
      <FavFruitProvider>
        <SetFavoriteFruit fruits={fruits} />
      </FavFruitProvider>
    );
    
    expect(setFavFruit.find('div.set-fav-fruit')).toHaveLength(1);
    expect(setFavFruit.find('h2').text()).toEqual("Select your Favorite Fruit");
    expect(setFavFruit.find('h2').parent().is('div.set-fav-fruit')).toBe(true); 
  });
  
  test ('(3 points) SetFavoriteFruit changes the context\'s favFruitId', () => {
    useContext.mockImplementation(() => ({
      favFruitId: "1",
      setFavFruitId: mockFn,
    }));
    const setFavFruit = mount(
      <FavFruitProvider>
        <SetFavoriteFruit fruits={fruits} />
      </FavFruitProvider>
    );
  
    setFavFruit.find('select').at(0).simulate('change', { target: { value: "2" } });
    expect(mockFn.mock.calls[0][0]).toEqual("2");
  });

  test ('(2 points) SetFavoriteFruit dropdown initially selects the fruit matching the context\'s favFruitId', () => {
    useContext.mockImplementation(() => ({
      favFruitId: "4",
      setFavFruitId: mockFn,
    }));
    const setFavFruit = mount(
      <FavFruitProvider>
        <SetFavoriteFruit fruits={fruits} />
      </FavFruitProvider>
    );
    
    expect(setFavFruit.find('select').props().value).toEqual("4");
  });
  
  test ('(1 points) SetFavoriteFruit is used by the App component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(SetFavoriteFruit)).toHaveLength(1);
  });
});

