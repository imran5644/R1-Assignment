import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './features/users/usersSlice';
import { useNavigate } from 'react-router-dom';

const AddUserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: '',
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };
  
    if (name === 'email') {
      if (!validateEmail(value)) {
        newErrors.email = 'Please enter a valid email address';
      } else {
        delete newErrors.email;
      }
    }
  
    setErrors(newErrors);
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(addUser(formData));
      setFormData({
        username: '',
        email: '',
        role: '',
      });
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <div>
        <label>Role:</label>
        <select name="role" value={formData.role} onChange={handleChange} required>
          <option>Select</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
