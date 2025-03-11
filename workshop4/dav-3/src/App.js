// src/App.js
import React from 'react';
import User from './Components/Users/Users'; 
import './App.css'; 

function App() {
  // Example user data
  const users = [
    { name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'janesmith@example.com', phone: '987-654-3210' },
    { name: 'Mike Johnson', email: 'mikejohnson@example.com', phone: '555-123-4567' },
    { name: 'Emily Davis', email: 'emilydavis@example.com', phone: '555-789-1234' },
    { name: 'David Brown', email: 'davidbrown@example.com', phone: '555-234-5678' },
  ];

  return (
    <div className="App">
      <h1>Users List</h1>
      {users.map((user, index) => (
        <User key={index} user={user} />  
      ))}
    </div>
  );
}

export default App;

