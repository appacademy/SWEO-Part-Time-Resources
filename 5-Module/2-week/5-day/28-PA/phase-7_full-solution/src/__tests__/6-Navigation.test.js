import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Navigation from '../components/Navigation';

describe('(7 points) Navigation', () => {
  test ('(1 points) Navigation renders a nav element', () => {
    const navigation = shallow(
      <Navigation />
    );
  
    expect(navigation.is('nav')).toBe(true);
  });
  
  test ('(1 points) Navigation renders four navigation links', () => {
    const navigation = shallow(
      <Navigation />
    );
  
    expect(navigation.find('NavLink')).toHaveLength(4);
  });
  
  test ('(1 points) Navigation renders a navigation link to "/"', () => {
    const navigation = shallow(
      <Navigation />
    );
  
    expect(navigation.find('NavLink').someWhere((navLink) => {
      return navLink.props().to === "/";
    })).toBe(true);
  });
  
  test ('(1 points) Navigation renders a navigation link to "/fruits/new"', () => {
    const navigation = shallow(
      <Navigation />
    );
  
    expect(navigation.find('NavLink').someWhere((navLink) => {
      return navLink.props().to === "/fruits/new";
    })).toBe(true);
  });
  test ('(1 points) Navigation renders a navigation link to "/fav-fruit"', () => {
    const navigation = shallow(
      <Navigation />
    );
  
    expect(navigation.find('NavLink').someWhere((navLink) => {
      return navLink.props().to === "/fav-fruit";
    })).toBe(true);
  });
  test ('(1 points) Navigation renders a navigation link to "/set-fav-fruit"', () => {
    const navigation = shallow(
      <Navigation />
    );
  
    expect(navigation.find('NavLink').someWhere((navLink) => {
      return navLink.props().to === "/set-fav-fruit";
    })).toBe(true);
  });
  
  test ('(1 points) Navigation is used by the App component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(Navigation)).toHaveLength(1);
  });
});

