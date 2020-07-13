import React from "react";
import './App.css';
import { Form, Button } from 'reactstrap'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import Routes from './Routes';
import Welcome from "./welcome"

export default class Register extends React.Component{

  constructor(props) {
    super(props);

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMatch = this.handleMatch.bind(this);
    this.state = {
      email: '',
      password: '',
      passwordW:'password',
      confirmPassword: '',
      match: false,
      login: false
  }
  }

  handleValidSubmit(event, values) {
    this.setState({passwordW: values.password});
    //onsole.log(values.password)
    this.setState({confirmPassword: values.confirmPassword});
    //console.log(values.confirmPassword)

    if(!this.state.match){

      alert("Passwords do not match!")

    }else {
      this.setState({login:true})
        
    }
    
  }

  handleInvalidSubmit(event, errors, values) {
    this.setState({email: values.email, error: true});
    alert("Invalid Credentials")

  }

  handlePassword(event){
    if(event.target.value.length > 4){
      this.setState({password: true})

    }
    this.setState({passwordW:event.target.value})
    

  }

handleEmail(event){

  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)){
    this.setState({email: true})

  }else{
    this.setState({email: false})
  }

}

handleMatch(event){
  if(event.target.value === this.state.passwordW){
    console.log("it is a match")
    this.setState({match:true});
  }else{
    console.log("it is Not a match")
    this.setState({match:false});

  }

}
  render(){

    if( this.state.login === true){

      return (<Routes path={Welcome}/>)

  }

    return(

        <Form className="loginBox" color="secondary">

          <h1>
            <span className="bigTitle">Join Us!</span>
          </h1>
          

          <AvForm className="userBox"  onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
             <AvField name="email" placeholder="Email"  type="email"  onChange={this.handleEmail} required validate={{
            required: {value: true},
            minLength: {value: 5},
            maxLength: {value: 30}
          }} />        
                  
             <AvField name="password" placeholder="Password"  type="password"  onChange={this.handlePassword} required validate={{
            required: {value: true},
            minLength: {value: 5},
            maxLength: {value: 16}
          }} />

           <AvField name="confirmPassword" placeholder="Confirm Password"  type="password" onChange={this.handleMatch}  required validate={{
            required: {value: true},
            maxLength: {value: 16}
          }} />        
            <Button  className="Btn" size="lg" block color="primary">Register</Button>
            
          </AvForm>

          


        </Form>



    )};


}

