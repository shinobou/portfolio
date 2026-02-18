import React from 'react';
import { Container, Card, Alert } from 'react-bootstrap';

const SubmissionSuccess = ({ data }) => {
  return (
    <Container className="mt-5">
      {/* Requirement: Display a confirmation message [cite: 31] */}
      <Alert variant="success">
        <Alert.Heading>Success!</Alert.Heading>
        <p>Thank you, {data.name}! Your message has been sent.</p>
      </Alert>

      {/* Requirement: Show the submitted data (Name, Email, Message) [cite: 32] */}
      <Card className="shadow-sm">
        <Card.Header as="h5">Submitted Details</Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>Name:</strong> {data.name}
          </Card.Text>
          <Card.Text>
            <strong>Email:</strong> {data.email}
          </Card.Text>
          <Card.Text>
            <strong>Message:</strong>
            <br />
            {data.message}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SubmissionSuccess;
 