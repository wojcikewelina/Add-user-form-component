import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import "./styles.css";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userData) => {
    console.log("in App :");
    console.log(userData);

    setUsersList((prevUsersList) => {
      return [...prevUsersList, userData];
    });
  };

  return (
    <div>
      <h1 className="app-title">Add user!</h1>
      <AddUser onSubmitUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
