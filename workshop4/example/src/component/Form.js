import React, { useState } from "react";

const Form = () => {
  const [userName, setuserName] = useState("");
  const [userPassword] = useState("");

  const disabled = userName && userPassword;

  return (
    <form>
      <input
        type="text"
        onChange={(e) => {
          setuserName(e.target.value);
        }}
        placeholder="UserName"
      />
      <input
        type="text"
        onInput={(e) => {
          const input = e.target;
          input.setCustomValidity("");
          const current = input.checkValidity();
          if (current) {
            if (!input.value.endsWith("@gmail.com")) {
              input.setCustomValidity("No gmail email");
              input.reportValidity();
            }
          }
        }}
        placeholder="userPassword"
      />
      <p>{userName}</p>
      <p>{userPassword}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        disabled={!disabled}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
