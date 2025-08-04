// src/Form.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    college: '',
    branch: '',
    year: '',
    projectDomain: '',
    need: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5005/submit', formData);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form: ', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: '0 auto' }}>
      <input name="name" placeholder="Name" onChange={handleChange} required /><br />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} required /><br />
      <select name="gender" onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select><br />
      <input name="college" placeholder="College Name" onChange={handleChange} required /><br />
      <input name="branch" placeholder="Branch" onChange={handleChange} required /><br />
      <input name="year" placeholder="Year" onChange={handleChange} required /><br />
      <input name="projectDomain" placeholder="Project Domain" onChange={handleChange} required /><br />
      <textarea name="need" placeholder="What's your need?" onChange={handleChange} required /><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;