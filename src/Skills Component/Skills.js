import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const Skills = () => (
  <Container className="mt-5">
    <h2>My Skills</h2>
    <ListGroup variant="flush">
      <ListGroup.Item>JavaScript & React.js</ListGroup.Item>
      <ListGroup.Item>Dart & Flutter</ListGroup.Item>
      <ListGroup.Item>Kotlin & Android Studio</ListGroup.Item>
      <ListGroup.Item>CSS & Bootstrap</ListGroup.Item>
    </ListGroup>
  </Container>
);

export default Skills;

