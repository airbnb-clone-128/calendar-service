import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CalendarPopUp from '../components/calendarPopUp.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Tests for CalendarPopUp Component', () => {
  test('CalendarPopUp renders without crashing', () => {
    const wrapper = shallow(<CalendarPopUp />);
    expect(wrapper.exists()).toBe(true);
  });
});
