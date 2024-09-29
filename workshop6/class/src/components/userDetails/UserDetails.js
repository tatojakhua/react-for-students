import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const UserDetails = () => {
  const { userID } = useParams();
  const [userData, setUserData] = useState({});
  const [searchedParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${userID}`;
    const queryParams = [];
    for (const param of searchedParams.entries()) {
      const [key, value] = param;
      queryParams.push({ key, value });
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [userID, searchedParams]);

  return (
    <div>
      <h1>{userData.name}</h1>
      <h1>{userData.email}</h1>
      <h1>{userData.address?.street}</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        go back
      </button>
    </div>
  );
};

export default UserDetails;
