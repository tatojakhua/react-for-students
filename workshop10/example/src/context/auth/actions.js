import { LOG_IN, LOG_OUT, AUTHENTICATE } from "./constants";

const logInAction = (data) => {
  return {
    type: LOG_IN,
    payload: data,
  };
};
const logOutAction = () => {
  return {
    type: LOG_OUT,
    payload: "",
  };
};

const authenticateAction = (token) => {
  return {
    type: AUTHENTICATE,
    payload: token,
  };
};

export { logInAction, authenticateAction, logOutAction };
