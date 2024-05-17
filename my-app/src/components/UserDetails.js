import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from './features/users/usersSlice';
import { Link } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.users.find((user) => user.id === parseInt(id)));
  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUserById(id));
    }
  }, [user, dispatch, id]);


  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <Link to={`/edit/${user.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default UserDetails;
