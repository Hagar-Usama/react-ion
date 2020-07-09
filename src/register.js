import React from "react";
import './App.css';
import { Form, Button } from 'reactstrap'
import { AvForm, AvField } from 'availity-reactstrap-validation';

export default class Register extends React.Component{

  constructor(props) {
    super(props);

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
  }
  }

  handleValidSubmit(event, values) {
    ///this.setState({email: values.email}, {password: values.password}, {confirmPassword: values.confirmPassword});
    //const { email, password, confirmPassword } = this.state;
    // perform all neccassary validations
    this.setState({password: values.password});
    console.log(values.password)
    this.setState({confirmPassword: values.confirmPassword});
    console.log(values.confirmPassword)

    if (this.state.password !== this.state.confirmPassword) {
        alert("Passwords don't match");
    } else {
      alert("You're now one of us");
        
    }
    //return <Redirect to="/welcome"/>
    //return <Redirect to="/register" />
    //return(<Routes />);
  }

  handleInvalidSubmit(event, errors, values) {
    this.setState({email: values.email, error: true});
    //return <Redirect to="/register" />
    alert("Invalid Credentials")

  }


  render(){

    return(

        <Form className="loginBox" color="secondary">

          <h1>
            <span className="bigTitle">Welcome to our Family!</span>
          </h1>
          

          <AvForm className="userBox"  onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
             <AvField name="email" placeholder="Email"  type="email" required validate={{
            required: {value: true},
            minLength: {value: 5},
            maxLength: {value: 30}
          }} />        
                  
             <AvField name="password" placeholder="Password"  type="password" required validate={{
            required: {value: true},
            minLength: {value: 5},
            maxLength: {value: 16}
          }} />

           <AvField name="confirmPassword" placeholder="Confirm Password"  type="password" required validate={{
            required: {value: true},
            minLength: {value: 5},
            maxLength: {value: 16}
          }} />        
            <Button  className="Btn" size="lg" block color="primary">Register</Button>
            
          </AvForm>

          


        </Form>



    )};


}

