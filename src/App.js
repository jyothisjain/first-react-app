import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


import React, { useState } from 'react';
import './App.css';

function App() {
 
  const [name, setName] = useState('');
  
  const getName = () => {
    const userName = prompt('Please enter your name:');
    setName(userName);
  };

  return (
    <><Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">REACT</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <div className="App">
        <header className="App-header">
          
          <p>Whose there??</p>
        <Button variant="primary" onClick={getName}>?</Button>
        {name && <p>Hello, {name}!</p>}
          
        </header>
      </div></>
  );

}
export default App;


