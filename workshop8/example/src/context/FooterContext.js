import React, { createContext, useContext, useEffect, useReducer } from "react";
import { handleInitialDataFetching } from "./effects";
import { initialState, reducer } from "./FooterReducer/footerReducer";
import { fetchPosts } from "../api/index";
const footerContext = createContext();

const FooterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    handleInitialDataFetching(dispatch, fetchPosts);
  }, []);

  return (
    <footerContext.Provider value={{ state, dispatch }}>
      {children}
    </footerContext.Provider>
  );
};

function useFooterContext() {
  const FooterContext = useContext(footerContext);
  if (FooterContext) {
    return FooterContext;
  }
  throw new Error("Error");
}

export { useFooterContext, FooterContextProvider };
