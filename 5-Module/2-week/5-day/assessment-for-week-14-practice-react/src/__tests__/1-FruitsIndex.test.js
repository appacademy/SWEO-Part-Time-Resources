import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import FruitsIndex from '../components/FruitsIndex';
import fruits from "../mockData/fruits.json";

describe('(8 points) FruitsIndex', () => {
  test ('(1 points) FruitsIndex renders a div with a class of "fruits-index"', () => {
    const fruitsIndex = shallow(
      <FruitsIndex fruits={fruits}/>
    );
  
    expect(fruitsIndex.is('div.fruits-index')).toBe(true);
  });
  
  test ('(1 points) FruitsIndex renders an h2 with the text "Fruits Index"', () => {
    const fruitsIndex = shallow(
      <FruitsIndex fruits={fruits}/>
    );
  
    expect(fruitsIndex.find('h2').text()).toEqual("Fruits Index");
    expect(fruitsIndex.find('h2').parent().is('div.fruits-index')).toBe(true); 
  });
  
  test ('(5 points) FruitsIndex renders a list of fruits from the mockData', () => {
    const fruitsIndex = shallow(
      <FruitsIndex fruits={fruits}/>
    );
  
    expect(fruitsIndex.find('Link')).toHaveLength(fruits.length);
  
    fruits.forEach((fruit, idx) => {
      expect(fruitsIndex.find('Link').at(idx).text()).toEqual(fruit.name);
      expect(fruitsIndex.find('Link').at(idx).props().to).toEqual(`/fruits/${fruit.id}`);
    });
  });
  
  test ('(1 points) FruitsIndex is used by the App component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(FruitsIndex)).toHaveLength(1);
  });
});

