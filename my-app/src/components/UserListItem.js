import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = ({ user, onDelete }) => {
  return (
    <li>
      <strong>ID:</strong> <Link to={`/user/${user.id}`}>{user.id}</Link><br />
      <strong>Username:</strong> {user.username}<br />
      <strong>Email:</strong> {user.email}<br />
      <strong>Role:</strong> {user.role}<br />
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </li>
  );
};

export default UserListItem;
