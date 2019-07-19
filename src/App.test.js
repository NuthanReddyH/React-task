import React from "react";
import { shallow, mount } from "enzyme";
import Provider from 'react-redux';
import configureStore from 'redux-mock-store';
//import { store } from '../src/store/store';
import { Person } from "../src/components/Person/Person";
import App from "./App";

let wrapper;
const mockStore = configureStore([]);
const store = mockStore({});

describe("Username input", () => {

    beforeEach(() => {
        wrapper = shallow(<Person store={store}/>)
    });
    test('should be called with the Person name', () => {
        // fill in email field with blah@gmail.com     
        wrapper.find('#personName').simulate(
          'change', 
          {target: 
            {name: 'personName', value: 'Nuthan'}
          }
        )});

        wrapper.find('#myForm').simulate(
            'submit', 
            {preventDefault() {}}
          )
    test('two plus two is four', () => {
        expect(2 + 2).toBe(4);
      });
    // test("shallow compare", () => {
    //     //let wrapper = mount(<Provider store={store}><App /></Provider>);
    //     console.log(wrapper);
    // })
});