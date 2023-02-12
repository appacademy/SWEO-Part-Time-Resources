import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import FruitShow from '../components/FruitShow';
import fruits from "../mockData/fruits.json";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({ fruitId: "1" }),
  useRouteMatch: () => ({ url: `/fruits/1` }),
}));

describe('(6 points) Route path: /fruits/1', () => {
  test('(1 points) FruitShow renders a div with a class of "fruit-show"', () => {
    const fruitShow = shallow(
      <FruitShow fruits={fruits}/>
    );

    expect(fruitShow.find('div.fruit-show')).toHaveLength(1);
  });

  test('(1 points) FruitShow renders an h2 with the name of the fruit with id of 1', () => {
    const fruitShow = shallow(
      <FruitShow fruits={fruits}/>
      );
      
    expect(fruitShow.find('h2').parent().is('div.fruit-show')).toBe(true); 
    
    expect(fruitShow.find('h2').text()).toEqual("Apple");
  });

  test('(1 points) FruitShow renders the color of the fruit with id of 1', () => {
    const fruitShow = shallow(
      <FruitShow fruits={fruits}/>
    );

    expect(fruitShow.contains("red")).toBe(true);
    expect(fruitShow.contains("yellow")).toBe(false);
  });

  test('(1 points) FruitShow renders the sweetness of the fruit with id of 1', () => {
    const fruitShow = shallow(
      <FruitShow fruits={fruits}/>
    );

    expect(fruitShow.contains(6)).toBe(true);
  });

  test('(1 points) FruitShow renders the seeds of the fruit with id of 1', () => {
    const fruitShow = shallow(
      <FruitShow fruits={fruits}/>
    );

    expect(fruitShow.contains("yes")).toBe(true);
  });

  test('(1 points) FruitShow is used by the App component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(FruitShow)).toHaveLength(1);
  });
});
