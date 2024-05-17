import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";
import { Provider } from 'react-redux';
import store from "./components/app/store";

function App() {
  return (
    <Provider store={store}>
       <AddUserForm />
       <UserList />
    </Provider>
  );
}

export default App;
