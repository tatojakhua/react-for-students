import React from 'react';

// Define a list of users
const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'Male',
    email: 'john.doe@example.com',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 28,
    gender: 'Female',
    email: 'jane.doe@example.com',
  },
  {
    firstName: 'Alex',
    lastName: 'Smith',
    age: 35,
    gender: 'Non-Binary',
    email: 'alex.smith@example.com',
  },
];

function App() {
  return (
    <div className="App">
      <h1>User Cards</h1>
      <div className="user-cards">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <h2>{user.firstName} {user.lastName}</h2>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


