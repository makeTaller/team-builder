import React, { useState } from 'react'
import Users from './Components/Users.Component'
import Form from './Components/Forms.Component'

import './App.css';

function App() {
  // setup registered user
  const [regUser, setRegUser] = useState([
    {
      id: Date.now(),
      username: 'ahaberman25',
      email: 'ahaberman25@gmail.com',
      role: 'Owner'
    }
  ])

  // update state
  const addUserHandler = newUser => {
    console.log("registering user", newUser);    
    setRegUser([...regUser, newUser]);
  };

  return (
    <div className="App">
      <h1>Registered Users</h1>
      <Form newUser={addUserHandler} />
      <Users regUsers={regUser} />
    </div>
  );
}

export default App;
