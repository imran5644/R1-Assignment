import React from 'react';

const users = [
    {
      id: '1',
      username: 'johndoe',
      email: 'johndoe@example.com',
      role: 'admin',
    },
    {
      id: '2',
      username: 'janedoe',
      email: 'janedoe@example.com',
      role: 'user',
    },
    {
      id: '3',
      username: 'mike123',
      email: 'mike123@example.com',
      role: 'user',
    },
    {
      id: '4',
      username: 'susan_smith',
      email: 'susan_smith@example.com',
      role: 'admin',
    },
  ];
  

const UserList = () => {
  

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} ({user.email}) - {user.role}
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
