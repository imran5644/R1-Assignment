import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from './features/users/usersSlice';
import ConfirmationDialog from './ConfirmationDialog';

const UserListItem = ({ user, onEdit }) => {
  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
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
        <button onClick={() => setShowConfirmation(true)}>Delete</button>
        {showConfirmation && (
          <ConfirmationDialog
            message={`Are you sure you want to delete user ${user.username}?`}
            onConfirm={handleDelete}
            onCancel={handleCancel}
          />
        )}
      </div>
    </li>
  );
};

export default UserListItem;
