import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
const User = () => {
  const { userId, userName } = useParams();
  const [searchParams] = useSearchParams();
  console.log(userId, userName);
  console.log(searchParams.get("userName"));
  return (
    <div>
      User {userId}
      {userName}
      {searchParams.get("filter")}
    </div>
  );
};

export default User;
