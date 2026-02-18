import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// Corrected import path to match your actual file
import profilePic from '../assets/NEW_ID-PIC.jpg'; 

const Home = () => (
  <section className="home-section d-flex align-items-center">
    <Container>
      <Row className="align-items-center">
        {/* Left: Professional Introduction [cite: 17, 18] */}
        <Col lg={6}>
          <h1 className="display-3 fw-bold">
            Turning Vision Into <span className="text-primary">Reality</span> With Code And Design.
          </h1>
          <p className="lead mt-4 text-secondary">
            Hi, I'm <strong>Joyce Ann Fernandez</strong>. As a BSIT student at the University of Cabuyao, 
            I am dedicated to turning ideas into innovative web applications. [cite: 1, 2]
          </p>
          <div className="mt-5">
            <Button variant="dark" size="lg" className="me-3 shadow">Resume ↗</Button>
            <Button variant="outline-dark" size="lg">Contact</Button>
          </div>
        </Col>

        {/* Right: Your Professional ID Picture */}
        <Col lg={6} className="text-center mt-5 mt-lg-0">
          <div className="image-wrapper">
            <img 
              src={profilePic} 
              alt="Joyce Ann Fernandez" 
              className="img-fluid profile-img shadow-lg"
              style={{ borderRadius: '20px', maxWidth: '80%' }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Home;