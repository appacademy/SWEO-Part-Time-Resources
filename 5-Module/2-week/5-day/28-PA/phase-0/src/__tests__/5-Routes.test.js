import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';
import { Router } from 'react-router-dom';
import FavFruitProvider from '../context/FavFruitContext';
import FruitsIndex from '../components/FruitsIndex';
import FruitForm from '../components/FruitForm';
import FruitShow from '../components/FruitShow';
import SetFavoriteFruit from '../components/SetFavoriteFruit';
import FavoriteFruit from '../components/FavoriteFruit';
import { createMemoryHistory } from "history";

jest.mock('react', () => ({
  ...jest.requireActual('react'), // use actual for all non-hook parts
  useContext: () => ({
    favFruitId: "1",
    setFavFruitId: () => {},
  })
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({ fruitId: "1" }),
  useRouteMatch: () => ({ url: `/fruits/1` }),
}));

describe('(6 points) Routes', () => {
  test ('(1 points) FruitsIndex should render at the path of "/" exactly', () => {
    const history = createMemoryHistory();
    history.push('/');
    const appWrapper = mount(
      <Router history={history}>
        <FavFruitProvider>
          <App />
        </FavFruitProvider>
      </Router>
    );
  
    expect(appWrapper.find(FruitsIndex)).toHaveLength(1);
    
    expect(appWrapper.find(FruitShow)).toHaveLength(0);
    expect(appWrapper.find(FruitForm)).toHaveLength(0);
    expect(appWrapper.find(FavoriteFruit)).toHaveLength(0);
    expect(appWrapper.find(SetFavoriteFruit)).toHaveLength(0);
  });
  
  test ('(1 points) FruitForm should render at the path of "/fruits/new"', () => {
    const history = createMemoryHistory();
    history.push('/fruits/new');
    const appWrapper = mount(
      <Router history={history}>
        <FavFruitProvider>
          <App />
        </FavFruitProvider>
      </Router>
    );
  
    expect(appWrapper.find(FruitForm)).toHaveLength(1);
    
    expect(appWrapper.find(FruitsIndex)).toHaveLength(0);
    expect(appWrapper.find(FruitShow)).toHaveLength(0);
    expect(appWrapper.find(FavoriteFruit)).toHaveLength(0);
    expect(appWrapper.find(SetFavoriteFruit)).toHaveLength(0);
  });
  
  test ('(1 points) FavoriteFruit should render at the path of "/fav-fruit"', () => {
    const history = createMemoryHistory();
    history.push('/fav-fruit');
    const appWrapper = mount(
      <Router history={history}>
        <FavFruitProvider>
          <App />
        </FavFruitProvider>
      </Router>
    );
  
    expect(appWrapper.find(FavoriteFruit)).toHaveLength(1);
  
    expect(appWrapper.find(FruitsIndex)).toHaveLength(0);
    expect(appWrapper.find(FruitShow)).toHaveLength(0);
    expect(appWrapper.find(FruitForm)).toHaveLength(0);
    expect(appWrapper.find(SetFavoriteFruit)).toHaveLength(0);
  });
  
  test ('(1 points) SetFavoriteFruit should render at the path of "/set-fav-fruit"', () => {
    const history = createMemoryHistory();
    history.push('/set-fav-fruit');
    const appWrapper = mount(
      <Router history={history}>
        <FavFruitProvider>
          <App />
        </FavFruitProvider>
      </Router>
    );
  
    expect(appWrapper.find(SetFavoriteFruit)).toHaveLength(1);
  
    expect(appWrapper.find(FruitsIndex)).toHaveLength(0);
    expect(appWrapper.find(FruitShow)).toHaveLength(0);
    expect(appWrapper.find(FruitForm)).toHaveLength(0);
    expect(appWrapper.find(FavoriteFruit)).toHaveLength(0);
  });
  
  test ('(1 points) FruitShow should render at the path of "/fruits/:fruitId"', () => {
    const history = createMemoryHistory();
    history.push('/fruits/2');
    const appWrapper = mount(
      <Router history={history}>
        <FavFruitProvider>
          <App />
        </FavFruitProvider>
      </Router>
    );
  
    expect(appWrapper.find(FruitShow)).toHaveLength(1);
    expect(appWrapper.find(FruitsIndex)).toHaveLength(0);
    expect(appWrapper.find(FruitForm)).toHaveLength(0);
    expect(appWrapper.find(FavoriteFruit)).toHaveLength(0);
    expect(appWrapper.find(SetFavoriteFruit)).toHaveLength(0);
  });
  
  test ('(1 points) "Page Not Found" should render at all other paths', () => {
    const history = createMemoryHistory();
    history.push('/blah');
    const appWrapper1 = mount(
      <Router history={history}>
        <FavFruitProvider>
          <App />
        </FavFruitProvider>
      </Router>
    );
    const regex = /page not found/i;
  
    expect(regex.test(appWrapper1.html())).toBe(true);
  
    expect(appWrapper1.find(FruitsIndex)).toHaveLength(0);
    expect(appWrapper1.find(FruitShow)).toHaveLength(0);
    expect(appWrapper1.find(FruitForm)).toHaveLength(0);
    expect(appWrapper1.find(FavoriteFruit)).toHaveLength(0);
    expect(appWrapper1.find(SetFavoriteFruit)).toHaveLength(0);
  
    history.push('/random-unknown')
    const appWrapper2 = mount(
      <Router history={history}>
        <FavFruitProvider>
          <App />
        </FavFruitProvider>
      </Router>
    );
  
    expect(regex.test(appWrapper2.html())).toBe(true);
  });
});
