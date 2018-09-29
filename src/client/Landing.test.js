import React from 'react';
import expect from 'expect';
import Enzyme,{ shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Landing from './Landing';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<Landing />)
describe('Landing page component', () => {
  it('rendering Landing - component test', () => {
    expect(wrapper.find('h2').text()).toEqual('React App(Weather forcast)');
  });
  
})