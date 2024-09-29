import React, { useState } from "react";
import styles from "./form.module.css";
import { signUp } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { HOME_PAGE, SIGN_IN_PAGE } from "../../constants/routes";
const Form = () => {
  const [info, setInfo] = useState({
    userName: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const signUpHandler = (e) => {
    e.preventDefault();
    signUp(info)
      .then(() => {
        navigate(SIGN_IN_PAGE, { state: { success: true } });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form className={styles.formWrapper}>
      <label htmlFor="userName">UserName</label>
      <input
        autoComplete="true"
        type="text"
        name="userName"
        onChange={(e) => {
          setInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
          });
        }}
      />

      <label htmlFor="email">email</label>
      <input
        autoComplete="true"
        type="text"
        name="email"
        onChange={(e) => {
          setInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
          });
        }}
      />
      <label htmlFor="password">Password</label>
      <input
        autoComplete="true"
        type="password"
        name="password"
        onChange={(e) => {
          setInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
          });
        }}
      />
      <button type="" onClick={signUpHandler}>
        Submit
      </button>
      <button>
        <Link to={HOME_PAGE}>back to home page</Link>
      </button>
    </form>
  );
};

export default Form;
