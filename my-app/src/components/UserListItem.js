import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from './features/users/usersSlice';

const UserListItem = ({ user, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };

  return (
    <li>
      <div>
        <strong>ID:</strong> {user?.id}<br />
        <strong>Username:</strong> {user?.username}<br />
        <strong>Email:</strong> {user?.email}<br />
        <strong>Role:</strong> {user?.role}<br />
      </div>
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default UserListItem;
