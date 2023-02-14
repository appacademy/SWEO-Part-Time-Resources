import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import FavoriteFruit from '../components/FavoriteFruit';

import fruits from "../mockData/fruits.json";

jest.mock('react', () => ({
  ...jest.requireActual('react'), // use actual for all non-hook parts
  useContext: () => ({
    favFruitId: "1",
    setFavoriteFruitId: () => {},
  })
}));

describe('(8 points) FavoriteFruit', () => {
  test ('(1 points) FavoriteFruit renders a div with a class of "fav-fruit"', () => {
    const favFruit = shallow(
      <FavoriteFruit fruits={fruits} />
    );
  
    expect(favFruit.is('div.fav-fruit')).toBe(true);
  });
  
  test ('(1 points) FavoriteFruit renders an h2 with the text "Favorite Fruit"', () => {
    const favFruit = shallow(
      <FavoriteFruit fruits={fruits} />
    );
  
    expect(favFruit.find('h2').text()).toEqual("Favorite Fruit");
    expect(favFruit.find('h2').parent().is('div.fav-fruit')).toBe(true); 
  });
  
  test ('(5 points) FavoriteFruit renders a link to the fruit matched to the context\'s favFruitId', () => {
    const favFruit = shallow(
      <FavoriteFruit fruits={fruits} />
    );
  
    expect(favFruit.find('NavLink').props().to).toEqual("/fruits/1");
  });
  
  test ('(1 points) FavoriteFruit is used by the App component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(FavoriteFruit)).toHaveLength(1);
  });
});

