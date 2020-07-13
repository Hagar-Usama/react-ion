import React from "react";
import './App.css';
import { Form, Button } from 'reactstrap'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import Routes from './Routes';


import Register from "./register"
import Welcome from "./welcome"



export default class Login extends React.Component{


constructor(props) {
    super(props);

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
    this.state = {email: false, password: false, redirect: false, login: false};
  }

  handleJoin(event){

    this.setState({redirect:true});
  }
  

  handleValidSubmit(event, values) {
    this.setState({email: values.email});
    this.setState({login:true})
    

  }

  handleInvalidSubmit(event, errors, values) {
    this.setState({email: values.email, error: true});
   
    alert("Invalid Credentials")

  }



render(){

    console.log(this.state.redirect)

    if (this.state.redirect === true) {
        return(<Routes path= {Register}/>)

    }

    if( this.state.login === true){

        return (<Routes path={Welcome}/>)

    }
   

return(

    <Form className="loginBox" onSumit={this.handleSubmit} color="secondary">

      <h1>
        <span className="bigTitle">Welcome!</span>
      </h1>
      

      <AvForm className="userBox" onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit} >
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
        <Button  className="Btn" size="lg" block color="primary">Log in</Button>
        
      </AvForm>

      <AvForm>
       
        <Button className="Btn" onClick={this.handleJoin} color="success" size="lg" block>Join Us</Button>
      </AvForm>


    </Form>
)

};

}
