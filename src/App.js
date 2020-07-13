import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Button } from 'reactstrap'


//import log from 'loglevel';
//import remote from 'loglevel-plugin-remote';

import Login from "./login"
//import Register from "./register"

import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component{

  constructor(props){
    super(props);
    this.redirectMe = this.redirectMe.bind(this);
    
  }


  redirectMe(){
    // Simulate a mouse click:
    window.location.href = <Routes />;
    
    alert("let's direct!")
    return(<Routes />);

  }

  componentDidMount() {
    document.title = "React-ion";

  }
  
  render(){
   
    return(
      <div className="App">
        
        <Login />

      </div>
    )

  }



}


export default App;


