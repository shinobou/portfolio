import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // This connects your professional CSS styles

// Import your components from their folders
import Home from './Home & About Components/Home';
import About from './Home & About Components/About';
import Skills from './Skills Component/Skills';
import Contact from './Skills Component/Contact';

function App() {
  return (
    <Router>
      {/* Navigation Bar Requirement */}
      <Navbar bg="light" expand="lg" className="navbar shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">JOYCE ANN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routing Logic for the 4 Main Components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;