import React from "react";
import { users } from "../data/users";
import User from "./User";
import UserStyledComponents from "./UserStyledComponents";
function Users() {
  return (
    <div className="users__wrapper">
      {users.map((user) => (
        <User key={user.name.first} info={user} />
        // <UserStyledComponents key={user.name.first} info={user} />
      ))}
    </div>
  );
}

export default Users;
