import React from 'react';
import { shallow } from 'enzyme';

import FruitShow from '../components/FruitShow';
import fruits from "../mockData/fruits.json";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({ fruitId: "2" }),
  useRouteMatch: () => ({ url: `/fruits/2` }),
}));

describe('(4 points) Route path: /fruits/2', () => {
  test('(1 points) FruitShow renders an h2 with the name of the fruit with id of 2', () => {
    const fruitShow = shallow(
      <FruitShow fruits={fruits}/>
      );
      
    expect(fruitShow.find('h2').parent().is('div.fruit-show')).toBe(true); 
    
    expect(fruitShow.find('h2').text()).toEqual("Banana");
  });

  test('(1 points) FruitShow renders the color of the fruit with id of 2', () => {
    const fruitShow = shallow(
      <FruitShow fruits={fruits}/>
    );

    expect(fruitShow.contains("yellow")).toBe(true);
    expect(fruitShow.contains("orange")).toBe(false);
  });

  test('(1 points) FruitShow renders the sweetness of the fruit with id of 2', () => {
    const fruitShow = shallow(
      <FruitShow fruits={fruits}/>
    );

    expect(fruitShow.contains(4)).toBe(true);
  });

  test('(1 points) FruitShow renders the seeds of the fruit with id of 1', () => {
    const fruitShow = shallow(
      <FruitShow fruits={fruits}/>
    );

    expect(fruitShow.contains("no")).toBe(true);
  });
});