import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from './features/users/usersSlice';

const EditUserForm = ({ editingUser, setEditingUser }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: 'user',
  });

  useEffect(() => {
    if (editingUser) {
      setFormData({
        username: editingUser.username,
        email: editingUser.email,
        role: editingUser.role,
      });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: editingUser.id, ...formData }));
    setEditingUser(null);
  };

  return editingUser ? (
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
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
      <button type="submit">Update User</button>
    </form>
  ) : null;
};

export default EditUserForm;
