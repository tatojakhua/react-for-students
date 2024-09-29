import React, { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { isTokenValid } from "../../utils/jwt";
import { authenticateAction } from "./actions";

const authContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token && isTokenValid(token)) {
      dispatch(authenticateAction(token));
    }
  }, []);

  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

const useAuthContext = () => {
  const AuthContext = useContext(authContext);
  if (!AuthContext) {
    throw new Error("auth context is not working");
  }
  return AuthContext;
};

export { AuthContextProvider, useAuthContext };
