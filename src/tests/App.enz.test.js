import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App';

describe('App Component', () => {
  it('renders without crashing with SHALLOW', () => {
    shallow(<App />);
  });
  it('renders without crashing with MOUNT', () => {
    mount(<App />);
  });
});
