import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById, updateUser } from './features/users/usersSlice';
import { useNavigate } from 'react-router-dom';
import './AddUserForm.css'; 

const EditUserForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.users.find((user) => user.id === parseInt(id)));
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: 'user',
  });

  useEffect(() => {
    if (!user) {
      dispatch(fetchUserById(id));
    } else {
      setFormData({
        username: user.username,
        email: user.email,
        role: user.role,
      });
    }
  }, [user, dispatch, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: parseInt(id), ...formData }));
    navigate('/');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}> 
      <h2 className="form-title">Edit User</h2> 
      <div className="form-group"> 
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group"> 
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group"> 
        <label>Role:</label>
        <select name="role" value={formData.role} onChange={handleChange} required>
          <option>Select</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit" className="form-submit-button">Update User</button> 
    </form>
  );
};

export default EditUserForm;
