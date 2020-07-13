import React from 'react';

import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import Login from './login';
import Register from './register';

configure({adapter: new Adapter()});

describe('Login Component', () => {
 

  it('Login password', () => {
    const wrapper = shallow(<Login/>);

    // length < 5
    wrapper.find('AvField[type="password"]')
    .simulate('change', {target: {name: 'password', 
    value: 'abc'} });
    wrapper.update()
    expect(wrapper.state('password')).toBeFalsy();

    // length > 4
    wrapper.find('AvField[type="password"]')
    .simulate('change', {target: {name: 'password', 
    value: '555555'} });
    wrapper.update()
    expect(wrapper.state('password')).toBeTruthy();

  });


  it('Login email', () => {
    const wrapper = shallow(<Login/>);
    
    //invalid emails
    wrapper.find('AvField[type="email"]')
    .simulate('change', {target: {name: 'email', 
    value: 'life.com'} });
    wrapper.update()
    expect(wrapper.state('email')).toBeFalsy();

    wrapper.find('AvField[type="email"]')
    .simulate('change', {target: {name: 'email', 
    value: 'life@gamil'} });
    wrapper.update()
    expect(wrapper.state('email')).toBeFalsy();

    wrapper.find('AvField[type="email"]')
    .simulate('change', {target: {name: 'email', 
    value: '@gm.com'} });
    wrapper.update()
    expect(wrapper.state('email')).toBeFalsy();

    // invalid emails

    wrapper.find('AvField[type="email"]')
    .simulate('change', {target: {name: 'email', 
    value: 'hope@yahoo.com'} });
    wrapper.update()
    expect(wrapper.state('email')).toBeTruthy();

    wrapper.find('AvField[type="email"]')
    .simulate('change', {target: {name: 'email', 
    value: 'me123@gamil.com'} });
    wrapper.update()
    expect(wrapper.state('email')).toBeTruthy();

    wrapper.find('AvField[type="email"]')
    .simulate('change', {target: {name: 'email', 
    value: 'hagar_usama@gm.com'} });
    wrapper.update()
    expect(wrapper.state('email')).toBeTruthy();




  });
  
  
    

});

describe('Register Component', () => {
 

  it('Register password', () => {
    const wrapper = shallow(<Register/>);

    // unmatch
    wrapper.find('AvField[name="password"]')
    .simulate('change', {target: {name: 'password', 
    value: 'helloWorld'} });

    wrapper.find('AvField[name="confirmPassword"]')
    .simulate('change', {target: {name: 'confirmPassword', 
    value: 'helloworld'} });
    wrapper.update()
    expect(wrapper.state('match')).toBeFalsy();

    wrapper.find('AvField[name="password"]')
    .simulate('change', {target: {name: 'password', 
    value: 'hello123'} });

    wrapper.find('AvField[name="confirmPassword"]')
    .simulate('change', {target: {name: 'confirmPassword', 
    value: 'hello111'} });
    wrapper.update()
    expect(wrapper.state('match')).toBeFalsy();


    //match
    wrapper.find('AvField[name="password"]')
    .simulate('change', {target: {name: 'password', 
    value: 'helloWorld'} });

    wrapper.find('AvField[name="confirmPassword"]')
    .simulate('change', {target: {name: 'confirmPassword', 
    value: 'helloWorld'} });
    wrapper.update()
    expect(wrapper.state('match')).toBeTruthy();

    wrapper.find('AvField[name="password"]')
    .simulate('change', {target: {name: 'password', 
    value: 'password123'} });

    wrapper.find('AvField[name="confirmPassword"]')
    .simulate('change', {target: {name: 'confirmPassword', 
    value: 'password123'} });
    wrapper.update()
    expect(wrapper.state('match')).toBeTruthy();


  });


 it('Register email', () => {
    const wrapper = shallow(<Register/>);
    
    //invalid emails
    wrapper.find('AvField[type="email"]')
    .simulate('change', {target: {name: 'email', 
    value: 'life.com'} });
    wrapper.update()
    expect(wrapper.state('email')).toBeFalsy();

    wrapper.find('AvField[type="email"]')
    .simulate('change', {target: {name: 'email', 
    value: 'life@gamil'} });
    wrapper.update()
    expect(wrapper.state('email')).toBeFalsy();

    wrapper.find('AvField[type="email"]')
    .simulate('change', {target: {name: 'email', 
    value: '@gm.com'} });
    wrapper.update()
    expect(wrapper.state('email')).toBeFalsy();

    // valid emails

    wrapper.find('AvField[type="email"]')
    .simulate('change', {target: {name: 'email', 
    value: 'hope@yahoo.com'} });
    wrapper.update()
    expect(wrapper.state('email')).toBeTruthy();

    wrapper.find('AvField[type="email"]')
    .simulate('change', {target: {name: 'email', 
    value: 'me123@gamil.com'} });
    wrapper.update()
    expect(wrapper.state('email')).toBeTruthy();

    wrapper.find('AvField[type="email"]')
    .simulate('change', {target: {name: 'email', 
    value: 'hagar_usama@gm.com'} });
    wrapper.update()
    expect(wrapper.state('email')).toBeTruthy();

  });
  


});

