import React, { useEffect, useState } from "react";
import User from "../user/User";
import "./users.css";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="users__wrapper">
      {users.map((user) => (
        <User key={user.id} info={user} />
      ))}
    </div>
  );
};

export default Users;
