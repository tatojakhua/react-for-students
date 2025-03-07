import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    name: true,
    email: true,
  });

  const correctEmail = "digitalAcademy@gmail.com";
  const correctPassword = "iLoveReact123";

  // Check if email and password are correct
  const handleLogin = () => {
    if (email === correctEmail && password === correctPassword) {
      setIsLoggedIn(true);
    } else {
      alert("Email or password is incorrect!");
    }
  };

  // Fetch users from RandomUser API
  const fetchUsers = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=5");
    setUsers(response.data.results);
  };

  // Fetch new user when button is clicked
  const fetchNewUser = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=1");
    setUsers((prevUsers) => [...prevUsers, ...response.data.results]);
  };

  // Apply filters to the users data
  const filteredUsers = users.map((user) => {
    const filteredUser = {};
    if (filters.name) filteredUser.name = `${user.name.first} ${user.name.last}`;
    if (filters.email) filteredUser.email = user.email;
    return filteredUser;
  });

  // Handle filter change
  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div>
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
          <button onClick={handleLogin} disabled={email !== correctEmail || password !== correctPassword}>
            Login
          </button>
        </div>
      ) : (
        <div>
          <h2>Welcome to the Dashboard</h2>
          <div>
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
          <div>
            {filteredUsers.map((user, index) => (
              <div key={index} className="user-card">
                {filters.name && <p>Name: {user.name}</p>}
                {filters.email && <p>Email: {user.email}</p>}
              </div>
            ))}
          </div>
          <button onClick={fetchNewUser}>Load More Users</button>
        </div>
      )}
    </div>
  );
}

export default App;

