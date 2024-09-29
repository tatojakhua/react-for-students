import React, { useState } from "react";
import styles from "./form.module.css";
import { signIn } from "../../api/auth";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
import { logInAction } from "../../context/auth/actions";
import { Link, useNavigate } from "react-router-dom";
import { HOME_PAGE } from "../../constants/routes";

import { PacmanLoader } from "react-spinners";

const Form = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    userName: "",
    password: "",
    error: "",
  });
  const [loading, setLoading] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setInfo((prev) => ({ ...prev, error: "" }));
    signIn(info)
      .then((data) => {
        dispatch(logInAction(data));
        navigate(HOME_PAGE);
      })
      .catch((err) => {
        setInfo((prev) => ({ ...prev, error: err.message }));
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <form className={styles.formWrapper}>
      <label htmlFor="userName">User Name or Email</label>
      <input
        autoComplete="true"
        value={info.userName}
        type="text"
        name="userName"
        onChange={(e) => {
          setInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
          });
        }}
      />

      <label htmlFor="password">Password</label>
      <input
        autoComplete="true"
        value={info.password}
        type="password"
        name="password"
        onChange={(e) => {
          setInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
          });
        }}
      />
      {loading && <PacmanLoader color="#36d7b7" />}
      {info.error && <h4>{info.error}</h4>}
      <button onClick={submitHandler}>Submit</button>
      <button>
        <Link to={HOME_PAGE}>back to home page</Link>
      </button>
    </form>
  );
};

export default Form;
