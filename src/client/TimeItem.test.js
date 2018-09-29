import React from 'react';
import expect from 'expect';
import Enzyme,{ shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TimeItem from './TimeItem';

Enzyme.configure({ adapter: new Adapter() });

const arr = [];
const wrapper = shallow(<TimeItem raw={arr}/>)
describe('TimeItem component', () => {
  it('rendering TimeItem - component test', () => {
    expect(wrapper.find('span'));
  });
  
})