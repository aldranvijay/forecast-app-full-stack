import React from 'react';
import expect from 'expect';
import Enzyme,{ shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<App />)
describe('App component', () => {
  it('rendering App - component test', () => {
    expect(wrapper.find('div').text()).toEqual("");
  });
  
})