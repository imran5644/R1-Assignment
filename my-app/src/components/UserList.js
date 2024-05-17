import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser, deleteUser } from "./features/users/usersSlice";
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import './UserListPage.css';

const UserListPage = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

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
      <Link to="/addUser" className="add-user-link">
        <button className="add-user-button">Add User</button>
      </Link>
      <div className="user-list-header">
        <h2>User List</h2>
      </div>
      <div className="table-responsive">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map(user => (
              <tr key={user.id}>
                <td><Link to={`/edit/${user.id}`}>{user.id}</Link></td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(users.length / usersPerPage)}
        paginate={paginate}
      />
    </div>
  );
};

export default UserListPage;
