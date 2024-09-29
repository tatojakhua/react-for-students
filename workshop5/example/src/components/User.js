import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState({
    name: "Gio",
    surname: "Dziko",
  });
  const [age, setAge] = useState(0);
  useEffect(() => {
    console.log("User USER useEffect");

    // setUser((prev) => ({ ...prev, name: "givi" }));
    // setUser({ name: user.name, surname: user.surname });
  }, [user]);

  useEffect(() => {
    console.log("User AGE useEffect");
    // setAge(age + 1);
    setAge(age);
    return () => {
      console.log("USER AGE CLEAN UP FUNC");
    };
  }, [age]);

  return (
    <div>
      <input
        onChange={(e) => {
          setUser((prev) => ({ ...prev, name: e.target.value }));
        }}
      />
      <h1>{user.name}</h1>
      <h1>{user.surname}</h1>
      <button onClick={() => setAge(age + 1)}>increase age</button>
      <h1>{age}</h1>
    </div>
  );
};

export default User;
