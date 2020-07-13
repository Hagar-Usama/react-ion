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
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.state = {email: false, password: false, redirect: false, login: false};
  }

  handleJoin(event){

    this.setState({redirect:true});
  }
  

  handleValidSubmit(event) {
    console.log("valid submit")

    this.setState({ login: true });

  }

  handleInvalidSubmit(values) {
    this.setState({email: values.email, error: true});
   
    alert("Invalid Credentials")

  }

  handlePassword(event){
    if(event.target.value.length > 4){
      this.setState({password: true})

    }

  }

handleEmail(event){

  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)){
    this.setState({email: true})

  }else{
    this.setState({email: false})
  }

}

render(){

    //console.log(this.state.redirect)

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
      

      <AvForm  name="mainForm" className="userBox" onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit} >
         <AvField name="email" placeholder="Email"  type="email" onChange={this.handleEmail} required validate={{
        required: {value: true},
        minLength: {value: 5},
        maxLength: {value: 30}
      }} />        

         <AvField name="password" placeholder="Password"  onChange={this.handlePassword} type="password" required validate={{
        required: {value: true},
        minLength: {value: 5},
        maxLength: {value: 16}
      }} />        
        <Button  className="Btn" size="lg" block color="primary">Log in</Button>
        
      </AvForm>

      
       
        <Button className="Btn" onClick={this.handleJoin} color="success" size="lg" block>Join Us</Button>
      


    </Form>
)

};

}
