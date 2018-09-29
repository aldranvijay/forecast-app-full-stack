import React from 'react';
import expect from 'expect';
import Enzyme,{ shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DateItem from './DateItem';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<DateItem />)
describe('DateItem component', () => {
  it('rendering DateItem - component test', () => {
    expect(wrapper.find('div'));
  });
  
  it('test if p have string DateItem component', () => {
    expect(wrapper.find('p').text()).toEqual("");
  });
  
})