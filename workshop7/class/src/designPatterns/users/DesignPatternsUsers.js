import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const DesignPatternsUsers = () => {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //     });
  // }, []);

  const [users, loading, err] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  if (err) {
    return (
      <div>
        <h1>{err}</h1>
      </div>
    );
  }
  return (
    <div>
      {users.map((user) => (
        <div key={user.name}>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};
export default DesignPatternsUsers;
