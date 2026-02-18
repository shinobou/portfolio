import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => (
  <Container className="mt-5">
    <Row className="justify-content-center">
      <Col md={8}>
        {/* Requirement: Add a heading (e.g., "About Me") [cite: 20] */}
        <h2 className="text-primary mb-4">About Me</h2>
        
        <Card className="shadow-sm p-4">
          <Card.Body>
            {/* Requirement: Include personal information about yourself  */}
            <Card.Title className="mb-3">Joyce Ann Fernandez</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">
              BSIT Student | University of Cabuyao
            </Card.Subtitle>
            
            {/* Requirement: Paragraph describing background and education [cite: 20] */}
            <p>
              I am currently a Bachelor of Science in Information Technology (BSIT) student 
              at the <strong>University of Cabuyao (Pamantasan ng Cabuyao)</strong>. 
              I am passionate about building technical solutions and exploring the 
              ever-evolving world of application development.
            </p>
            
            {/* Requirement: Include hobbies  */}
            <p>
              Beyond my academic studies, I have a keen interest in skincare science and 
              often spend my free time staying updated on the latest programming trends 
              and mobile development frameworks.
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default About;