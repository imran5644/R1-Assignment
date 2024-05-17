import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";
import { Provider } from 'react-redux';
import store from "./components/app/store";
import React, { useState } from 'react';
import EditUserForm from "./components/EditUserForm";
import UserDetails from './components/UserDetails';

function App() {
  const [editingUser, setEditingUser] = useState(null);

  return (
    <Provider store={store}>
      <Router> 
        <Routes>
          <Route path="/addUser" element={<AddUserForm />} />
          <Route path="/" element={<UserList setEditingUser={setEditingUser} />} />
          <Route path="/edit/:id" element={<EditUserForm />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
