import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addUser } from "./features/users/usersSlice";

const AddUserForm = () => {
  const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        role: 'user',
      });

    const handleChange = (e) => {
        const  {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(formData));
        setFormData({
          username: '',
          email: '',
          role: 'user',
        });
    };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
