import React from 'react';

const UserListItem = ({ user }) => {
  return (
    <li>
      <strong>ID:</strong> {user?.id}<br />
      <strong>Username:</strong> {user?.username}<br />
      <strong>Email:</strong> {user?.email}<br />
      <strong>Role:</strong> {user?.role}<br />
    </li>
  );
};

export default UserListItem;
