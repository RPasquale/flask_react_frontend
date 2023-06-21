import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mathAnswer, setMathAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation to check if the math answer is correct
    if (Number(mathAnswer) !== 4) {
      alert('Incorrect answer. Please try again.');
      return;
    }

    // Add your code here to handle the form submission (e.g., send an email)

    // Clear form inputs
    setName('');
    setEmail('');
    setMessage('');
    setMathAnswer('');
  };

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <label htmlFor="mathQuestion">What is 2 + 2?</label>
        <input
          type="number"
          id="mathQuestion"
          value={mathAnswer}
          onChange={(e) => setMathAnswer(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

