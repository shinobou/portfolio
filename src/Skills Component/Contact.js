import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
// [1] This import connects your separate component as required by the lab [cite: 35]
import SubmissionSuccess from './SubmissionSuccess';

const Contact = () => {
  // [2] Form data state to capture inputs [cite: 29]
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });

  // [3] State to toggle between the form and the success component 
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // [4] When submitted, the component will be replaced 
    setSubmitted(true);
  };

  // [5] Conditional rendering: Replace the form with SubmissionSuccess 
  if (submitted) {
    return <SubmissionSuccess data={formData} />;
  }

  return (
    <Container className="mt-5">
      <h2>Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        {/* Name Field [cite: 24] */}
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your name"
            required 
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
          />
        </Form.Group>

        {/* Email Field [cite: 25] */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter your email"
            required 
            onChange={(e) => setFormData({...formData, email: e.target.value})} 
          />
        </Form.Group>

        {/* Message Field [cite: 26] */}
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Type your message here..."
            required 
            onChange={(e) => setFormData({...formData, message: e.target.value})} 
          />
        </Form.Group>

        {/* Submit Button [cite: 27] */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;