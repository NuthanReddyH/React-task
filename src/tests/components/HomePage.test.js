import React from "react";
import { shallow, mount } from "enzyme";
import { Home } from '../../components/container/HomePage/HomePage';

describe ('dumb component', () => {
  const wrapper = shallow( <Home />);
    
  console.log(wrapper.length);
  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
 });
})
