import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserListItem from './UserListItem';
import { showUser, deleteUser  } from "./features/users/usersSlice";
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

const UserListPage = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);


  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUser(id));
    }
  };

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      <Link to="/addUser">
        <button>Add User</button>
      </Link>
      <h2>User List</h2>
      <ul>
        {currentUsers.map(user => (
          <UserListItem key={user.id} user={user} onDelete={handleDelete} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(users.length / usersPerPage)}
        paginate={paginate}
      />
    </div>
  );
};

export default UserListPage;

