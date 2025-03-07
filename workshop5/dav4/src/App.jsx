import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // State for email, password, and login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State for users and filtering options
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({ name: true, email: true });

  // Predefined email and password
  const correctEmail = 'digitalAcademy@gmail.com';
  const correctPassword = 'iLoveReact123';

  // Handle login on button click
  const handleLogin = () => {
    if (email === correctEmail && password === correctPassword) {
      setIsLoggedIn(true);
    } else {
      alert('Incorrect email or password!');
    }
  };

  // Fetch users from RandomUser API
  const fetchUsers = async () => {
    const response = await axios.get('https://randomuser.me/api/?results=5');
    setUsers(response.data.results);
  };

  // Fetch new user when the button is clicked
  const fetchNewUser = async () => {
    const response = await axios.get('https://randomuser.me/api/?results=1');
    setUsers((prevUsers) => [...prevUsers, ...response.data.results]);
  };

  // Filter users based on selected options (name, email)
  const filteredUsers = users.map((user) => {
    const filteredUser = {};
    if (filters.name) filteredUser.name = `${user.name.first} ${user.name.last}`;
    if (filters.email) filteredUser.email = user.email;
    return filteredUser;
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  // UseEffect to load users when the component is mounted
  useEffect(() => {
    if (isLoggedIn) {
      fetchUsers();
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div className="login-form">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            disabled={email !== correctEmail || password !== correctPassword}
          >
            Login
          </button>
        </div>
      ) : (
        <div className="dashboard">
          <h2>Welcome to the Dashboard</h2>
          <div className="filters">
            <label>
              <input
                type="checkbox"
                name="name"
                checked={filters.name}
                onChange={handleFilterChange}
              />
              Show Name
            </label>
            <label>
              <input
                type="checkbox"
                name="email"
                checked={filters.email}
                onChange={handleFilterChange}
              />
              Show Email
            </label>
          </div>
          <div className="users-list">
            {filteredUsers.map((user, index) => (
              <div key={index} className="user-card">
                {filters.name && <p>Name: {user.name}</p>}
                {filters.email && <p>Email: {user.email}</p>}
              </div>
            ))}
          </div>
          <button className="load-more" onClick={fetchNewUser}>
            Load More Users
          </button>
        </div>
      )}
    </div>
  );
}

export default App;


