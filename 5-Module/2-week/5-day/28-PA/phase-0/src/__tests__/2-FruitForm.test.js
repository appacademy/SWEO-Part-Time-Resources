import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';
import FruitForm from '../components/FruitForm';
import fruits from "../mockData/fruits.json";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

const consoleSpy = jest.spyOn(global.console, 'log').mockImplementation();

describe('(18 points) FruitForm', () => {
  test ('(1 points) FruitForm renders a form with a class of "fruit-form"', () => {
    const fruitForm = shallow(
      <FruitForm fruits={fruits} />
    );
  
    expect(fruitForm.is('form.fruit-form')).toBe(true);
    expect(fruitForm.find('h2').text().toLowerCase()).toEqual("enter a fruit");
    expect(fruitForm.find('h2').parent().is('form.fruit-form')).toBe(true); 
  });
  
  test ('(2 points) FruitForm has a controlled input for the name field', () => {
    const fruitForm = shallow(
      <FruitForm fruits={fruits} />
    );
  
    expect(fruitForm.find('input[name="name"]').props().value).toEqual("");
    fruitForm.find('input[name="name"]').simulate('change', { target: { value: "Blueberry" } });
    expect(fruitForm.find('input[name="name"]').props().value).toEqual("Blueberry");
  });
  
  test ('(2 points) FruitForm has a controlled input for the sweetness field', () => {
    const fruitForm = shallow(
      <FruitForm fruits={fruits} />
    );
  
    expect(fruitForm.find('input[name="sweetness"]').props().value).toEqual(1);
    fruitForm.find('input[name="sweetness"]').simulate('change', { target: { value: "7" } });
    expect(fruitForm.find('input[name="sweetness"]').props().value).toEqual("7");
  });
  
  test ('(2 points) FruitForm has a controlled input for the color dropdown', () => {
    const fruitForm = shallow(
      <FruitForm fruits={fruits} />
    );
  
    expect(fruitForm.find('select').props().value).toEqual("red");
    fruitForm.find('select').simulate('change', { target: { value: "blue" } });
    expect(fruitForm.find('select').props().value).toEqual("blue");
  });

  test ('(2 points) FruitForm has controlled inputs for the seeds radio inputs', () => {
    const fruitForm = shallow(
      <FruitForm fruits={fruits} />
    );
  
    expect(fruitForm.find('input[type="radio"]').at(0).props().value).toEqual("no");
    expect(fruitForm.find('input[type="radio"]').at(1).props().value).toEqual("yes");
    expect(fruitForm.find('input[type="radio"]').at(0).props().checked).toEqual(false);
    expect(fruitForm.find('input[type="radio"]').at(1).props().checked).toEqual(true);
    fruitForm.find('input[type="radio"]').at(0).simulate('change', { target: { value: "no" } });
    expect(fruitForm.find('input[type="radio"]').at(0).props().checked).toEqual(true);
    expect(fruitForm.find('input[type="radio"]').at(1).props().checked).toEqual(false);
  });
  
  test ('(1 points) FruitForm shows an error in "ul.errors" if name is less than 3 characters', () => {
    const fruitForm = mount(
      <FruitForm fruits={fruits} />
    );
  
    expect(fruitForm.find('input[name="name"]').props().value).toEqual("");
    expect(fruitForm.find('ul.errors').children()).toHaveLength(1);
  });
  
  test ('(1 points) FruitForm shows an error in "ul.errors" if name more than 20 characters', () => {
    const fruitForm = mount(
      <FruitForm fruits={fruits} />
    );
  
    expect(fruitForm.find('input[name="name"]').props().value).toEqual("");
    fruitForm.find('input[name="name"]').simulate('change', { target: { value: "This is 21 characters" } });
    expect(fruitForm.find('ul.errors').children()).toHaveLength(1);
  });

  test ('(1 points) FruitForm shows an error in "ul.errors" if name already exists', () => {
    const fruitForm = mount(
      <FruitForm fruits={fruits} />
    );
  
    expect(fruitForm.find('input[name="name"]').props().value).toEqual("");
    fruitForm.find('input[name="name"]').simulate('change', { target: { value: "Apple" } });
    expect(fruitForm.find('ul.errors').children()).toHaveLength(1);
  });
  
  test ('(1 points) FruitForm does not show any errors in "ul.errors" if name filled in', () => {
    const fruitForm = mount(
      <FruitForm fruits={fruits} />
    );
  
    expect(fruitForm.find('input[name="name"]').props().value).toEqual("");
    fruitForm.find('input[name="name"]').simulate('change', { target: { value: "Blueberry" } });
    expect(fruitForm.find('ul.errors').children()).toHaveLength(0);
  });
  
  test ('(1 points) FruitForm shows an error in "ul.errors" if sweetness is less than 1', () => {
    const fruitForm = mount(
      <FruitForm fruits={fruits} />
    );
  
    expect(fruitForm.find('input[name="name"]').props().value).toEqual("");
    expect(fruitForm.find('input[name="sweetness"]').props().value).toEqual(1);
    fruitForm.find('input[name="sweetness"]').simulate('change', { target: { value: "0" } });
    expect(fruitForm.find('ul.errors').children()).toHaveLength(2);
  });
  
  test ('(1 points) FruitForm shows an error in "ul.errors" if sweetness is greater than 10', () => {
    const fruitForm = mount(
      <FruitForm fruits={fruits} />
    );
  
    expect(fruitForm.find('input[name="name"]').props().value).toEqual("");
    expect(fruitForm.find('input[name="sweetness"]').props().value).toEqual(1);
    fruitForm.find('input[name="sweetness"]').simulate('change', { target: { value: "11" } });
    expect(fruitForm.find('ul.errors').children()).toHaveLength(2);
  });
  
  test ('(1 points) FruitForm is used by the App component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(FruitForm)).toHaveLength(1);
  });
  
  test ('(1 points) FruitForm disables the button when there are errors', () => {
    const fruitForm = mount(
      <FruitForm fruits={fruits} />
    );
  
    expect(fruitForm.find('input[name="name"]').props().value).toEqual("");
    expect(fruitForm.find('ul.errors').children()).toHaveLength(1);
    expect(fruitForm.find('button').props().disabled).toBe(true);
    fruitForm.find('input[name="name"]').simulate('change', { target: { value: "Blueberry" } });
    expect(fruitForm.find('input[name="name"]').props().value).toEqual("Blueberry");
    expect(fruitForm.find('ul.errors').children()).toHaveLength(0);
    expect(fruitForm.find('button').props().disabled).toBe(false);
  });
  
  test ('(1 points) FruitForm prints the form values and redirects to "/" when submitted', () => {
    const history = createMemoryHistory();
    history.push('/fruits/new');
    const fruitForm = mount(
      <Router history={history}>
        <App />
      </Router>
    );
  
    expect(history.location.pathname).toBe("/fruits/new");
    fruitForm.find('input[name="name"]').simulate('change', { target: { value: "Blueberry" } });
    fruitForm.find('input[name="sweetness"]').simulate('change', { target: { value: "7" } });
    fruitForm.find('select').simulate('change', { target: { value: "blue" } });
    expect(fruitForm.find('ul.errors').children()).toHaveLength(0);
    expect(fruitForm.find('button').props().disabled).toBe(false);
    fruitForm.find('form').simulate('submit', { preventDefault: () => {} });
    expect(history.location.pathname).toBe("/");
    expect(consoleSpy.mock.calls[0][0]).toEqual({ name: "Blueberry", sweetness: "7", color: "blue", seeds: "yes" });
  });
})

