import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";
import { Provider } from 'react-redux';
import store from "./components/app/store";
import EditUserForm from "./components/EditUserForm";
import React, { useState } from 'react';

function App() {
  const [editingUser, setEditingUser] = useState(null);

  return (
    <Provider store={store}>
       <AddUserForm />
       <EditUserForm editingUser={editingUser} setEditingUser={setEditingUser} />
       <UserList setEditingUser={setEditingUser} />
    </Provider>
  );
}

export default App;
