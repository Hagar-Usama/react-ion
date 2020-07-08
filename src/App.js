import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, FormGroup, Button } from 'reactstrap'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class App extends Component{

  render(){
    return(
      <div className="App">
        <Form className="loginBox" color="secondary">

          <h1>
            <span className="bigTitle">Welcome!</span>
          </h1>
          <div className="userBox">
            <FormGroup>
              <input type = "email" placeholder="Email"/>
            </FormGroup>
            </div>
            
            <div className="userBox">
              <FormGroup>
                <input type = "password" placeholder="Password"/>
              </FormGroup>


          </div>
            
          <Button className="loginBtn" color="primary">Log in</Button>{' '}
        </Form>
      </div>
     

    )

  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Hello my first React 👋 
//         </p>
        
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

export default App;
