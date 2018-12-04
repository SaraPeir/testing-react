import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { shallow, mount } from 'enzyme';

describe('<App />', () => {

        it('renders without crashing', () => {
            const wrapper = shallow(<App />);
            expect(wrapper).toHaveLength(1);
        });
        
        it('has a only red text', () => {
            const wrapper = shallow(<App />);
            expect(wrapper.find('.red-text')).toHaveLength(1);
        });

        it('has a only greeting id', () => {
            const wrapper = shallow(<App />);
            expect(wrapper.find('#greeting')).toHaveLength(1);
        });

        it('p with id="eng-greeting" contains "Hello!"', () => {
            const calculatedValue = 5
            const wrapper = shallow(
                <p id="eng-greeting">Hello!</p>
            );
            expect(wrapper.contains("Hello!")).toEqual(true);
        });

        it('shows the correct calculated value', () => {
            const calculatedValue = 5
            const wrapper = shallow(
                <p id="calculated-value">{calculatedValue}</p>
            );
            expect(wrapper.contains(5)).toEqual(true);
        });

        it('shows the correct calculated value 3', () => {
            const calculatedValue = 5
            const wrapper = shallow(
                <p id="calculated-value">{calculatedValue}</p>
            );
            expect(wrapper.text()).toEqual(calculatedValue.toString());
        });
    }
)
